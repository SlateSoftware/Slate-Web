import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

/**
 * Recursively finds all directories with index.ts files in the lib directory
 */
function findComponentDirs(dir, basePath = "") {
    const components = [];

    try {
        const items = readdirSync(dir);

        for (const item of items) {
            const fullPath = join(dir, item);
            const stat = statSync(fullPath);

            if (stat.isDirectory()) {
                const currentPath = basePath ? `${basePath}/${item}` : item;

                // Check if this directory has an index.ts file
                const indexPath = join(fullPath, "index.ts");
                try {
                    statSync(indexPath);
                    components.push({
                        name: item,
                        path: currentPath,
                        distPath: `./dist/${currentPath}/index.js`,
                        typesPath: `./dist/${currentPath}/index.d.ts`,
                    });
                } catch {
                    // No index.ts file, continue searching subdirectories
                }

                // Recursively search subdirectories
                const subComponents = findComponentDirs(fullPath, currentPath);
                components.push(...subComponents);
            }
        }
    } catch (error) {
        console.warn(`Warning: Could not read directory ${dir}:`, error.message);
    }

    return components;
}

/**
 * Generates export entries for package.json
 */
function generateExports() {
    const libDir = join(rootDir, "src/lib");
    const packagePath = join(rootDir, "package.json");

    console.log("🔍 Scanning lib directory for components...");

    // Find all component directories
    const components = findComponentDirs(libDir);

    if (components.length === 0) {
        console.log("⚠️  No components found with index.ts files");
        return;
    }

    console.log(`📦 Found ${components.length} components:`);
    components.forEach((comp) => console.log(`   - ${comp.name} (${comp.path})`));

    // Read current package.json
    const packageJson = JSON.parse(readFileSync(packagePath, "utf8"));

    // Preserve existing non-component exports
    const existingExports = packageJson.exports || {};
    const newExports = {};

    // Keep non-component exports (like tailwind.css)
    for (const [key, value] of Object.entries(existingExports)) {
        if (!key.startsWith("./") || key === "./tailwind.css") {
            newExports[key] = value;
        }
    }

    // Add root export if index.ts exists
    try {
        statSync(join(libDir, "index.ts"));
        newExports["."] = {
            svelte: "./dist/index.js",
            default: "./dist/index.js",
            types: "./dist/index.d.ts",
        };
    } catch {
        // No index.ts file in lib directory
    }

    // Generate new component exports
    for (const component of components) {
        const exportKey = `./${component.name}`;
        newExports[exportKey] = {
            svelte: component.distPath,
            default: component.distPath,
            types: component.typesPath,
        };
    }

    // Add utils export if it exists
    try {
        statSync(join(libDir, "utils.ts"));
        newExports["./utils"] = {
            svelte: "./dist/utils.js",
            default: "./dist/utils.js",
            types: "./dist/utils.d.ts",
        };
        console.log("   - utils (utils.ts)");
    } catch {
        // utils.ts doesn't exist
    }

    // Update package.json
    packageJson.exports = newExports;

    // Write back to package.json with proper formatting
    writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + "\n");

    console.log(`✅ Generated ${Object.keys(newExports).length} export entries in package.json`);

    /*  Show the generated exports
  const componentExports = Object.fromEntries(
    Object.entries(newExports).filter(
      ([key]) => key.startsWith("./") && key !== "./tailwind.css",
    ),
  );
  */

    // console.log(JSON.stringify(componentExports, null, 2));
}

// Run the script
try {
    generateExports();
} catch (error) {
    console.error("❌ Error generating exports:", error.message);
    process.exit(1);
}
