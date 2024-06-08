import { cn } from "@/lib/utils";
import React from "react";

export default function TextV1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("text-6xl font-medium", className)}>{children}</div>
  );
}
