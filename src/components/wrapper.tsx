import { cn } from "@/lib/utils";
import React from "react";

export default function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(" md:py-10 md:px-32 px-10 py-5", className)}>
      {children}
    </div>
  );
}
