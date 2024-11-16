import { create } from "zustand";
import type { Window, WindowStore } from "../types/Window";

export const useWindow = create<WindowStore>((set) => ({
  windows: [],
  createWindow: ({
    content,
    id,
    position = { x: 0, y: 0 },
    size = { width: 300, height: 400 },
    ...props
  }: Window) =>
    set((state) => {
      const newWindow: Window = {
        id,
        position,
        size,
        content,
        ...props,
      };
      return { windows: [...state.windows, newWindow] };
    }),
  updateWindow: (id, updates) =>
    set((state) => ({
      windows: state.windows.map((win) =>
        win.id === id ? { ...win, ...updates } : win
      ),
    })),
  focusWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((win) =>
        win.id === id
          ? { ...win, isFocused: true }
          : { ...win, isFocused: false }
      ),
    })),
  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((win) => win.id !== id),
    })),
}));
