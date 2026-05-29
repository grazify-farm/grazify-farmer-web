import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
};

const sizeMap = {
  default: "max-w-6xl",
  narrow:  "max-w-4xl",
  wide:    "max-w-7xl",
} as const;

export default function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  return (
    <div className={`${sizeMap[size]} mx-auto px-4 ${className}`.trim()}>
      {children}
    </div>
  );
}
