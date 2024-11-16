"use client";

import { useWindow } from "@/stores/WindowStore";
import { Button } from "../components/ui/button";
import { TestWindow } from "@/components/windows/TestWindow";
import { useState } from "react";
import type { ChangeEvent } from "react";

export default function Home() {
  const { createWindow, windows } = useWindow();
  const [newWindowId, setNewWindowId] = useState<string>("new-window");

  function handleNewWindowIdChange(event: ChangeEvent<HTMLInputElement>) {
    setNewWindowId(event.target.value || "new-window");
  }

  function handleCreateWindow(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    createWindow({
      id: newWindowId,
      content: <TestWindow />,
      position: { x: 200, y: 300 },
      size: { width: 500, height: 30 },
    });

    setNewWindowId("");
  }

  return (
    <div>
      <h1 className="text-6xl font-bold">Slate Web OS</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="border border-slate-900"
          value={newWindowId}
          onChange={handleNewWindowIdChange}
          placeholder="Enter Window ID"
        />
        <Button type="button" onClick={handleCreateWindow}>
          Create test window
        </Button>
      </form>
      <div className="flex flex-col">
        <h2>Taskbar</h2>
        <div className="flex gap-2">
          {windows.map((window) => (
            <div key={window.id}>{window.id}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
