import { ReactNode } from "react";

interface ScrollNumberProps {
  start?: number;
  end: number;
}

interface ScrollNumberItemProps {
  height: number;
  children: ReactNode;
  active: boolean;
}

export { ScrollNumberProps, ScrollNumberItemProps };
