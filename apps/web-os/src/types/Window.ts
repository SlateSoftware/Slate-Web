import type { ReactNode } from "react";

type Position = {
  x: number;
  y: number;
};

type Size = {
  width: number;
  height: number;
};

type Type = "window" | "modal";

export type Window = {
  id: string;
  position?: Position;
  size?: Size;
  content: ReactNode;
  isMinimized?: boolean;
  isMaximized?: boolean;
  isFocused?: boolean;
};

export type WindowStore = {
  windows: Window[];
  createWindow: (options: {
    content: ReactNode;
    id: string;
    position?: Position;
  }) => void;
  updateWindow: (id: string, updates: Partial<Window>) => void;
  focusWindow: (id: string) => void;
  closeWindow: (id: string) => void;
};
