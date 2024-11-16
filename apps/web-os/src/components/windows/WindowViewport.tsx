"use client";

import { useWindow } from "@/stores/WindowStore";
import { useState, useRef, useEffect } from "react";

export function WindowViewport() {
  const { windows } = useWindow();

  return (
    <>
      {windows.map((window) => {
        const [position, setPosition] = useState(window.position);
        const [isDragging, setIsDragging] = useState(false);
        const dragStart = useRef({ x: 0, y: 0 });
        const windowRef = useRef<HTMLDivElement | null>(null);
        const draggableRef = useRef<HTMLElement | null>(null);

        // Start dragging
        const handleMouseDown = (e: React.MouseEvent) => {
          if (draggableRef.current && e.target === draggableRef.current) {
            setIsDragging(true);
            dragStart.current = { x: e.clientX, y: e.clientY };
          }
        };

        // Dragging (move)
        const handleMouseMove = (e: MouseEvent) => {
          if (isDragging) {
            const dx = e.clientX - dragStart.current.x;
            const dy = e.clientY - dragStart.current.y;

            // Constrain the window's position to the container (if any)
            if (windowRef.current && position) {
              const newX = position.x + dx;
              const newY = position.y + dy;

              // Update the position
              setPosition({ x: newX, y: newY });
              dragStart.current = { x: e.clientX, y: e.clientY };
            }
          }
        };

        // End dragging
        const handleMouseUp = () => {
          setIsDragging(false);
        };

        // Attach event listeners on mount/unmount
        useEffect(() => {
          document.addEventListener("mousemove", handleMouseMove);
          document.addEventListener("mouseup", handleMouseUp);

          // Dynamically find the element with `data-draggable` from the content
          if (window.content && windowRef.current) {
            const draggableElement =
              windowRef.current.querySelector("[data-draggable]");
            if (draggableElement) {
              draggableRef.current = draggableElement as HTMLElement;
            }
          }

          return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
          };
        }, [isDragging, window.content, handleMouseDown]);

        return (
          <div
            className="absolute left-0 top-0"
            style={{ width: window.size?.width, height: window.size?.height }}
            key={window.id}
            id={window.id}
          >
            {window.content}
          </div>
        );
      })}
    </>
  );
}
