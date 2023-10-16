import { ReactNode } from "react";

declare module 'react-reveal' {
  export interface FadeProps {
    bottom?: boolean;
    duration?: number;
    delay?: number;
    children?: ReactNode;
  };
}