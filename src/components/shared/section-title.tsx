import { cn } from "@/lib/utils";
import React from "react";

export default function SectionTitle({
  children,
  className,
  mode = "dark",
}: {
  children: React.ReactNode;
  className?: string;
  mode?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "text-4xl font-extrabold text-blue-900 my-10 md:m-10  md:p-2 text-center",
        mode === "dark" ? "text-blue-900" : "text-blue-100",
        className
      )}
    >
      <div>{children}</div>
    </div>
  );
}
