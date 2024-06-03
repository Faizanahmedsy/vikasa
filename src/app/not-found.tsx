import Image from "next/image";
import React from "react";

export default function Custom404() {
  return (
    <div className="grid place-items-center text-center h-screen">
      <div className="space-y-8">
        <Image src="custom-404.svg" alt="404" width={500} height={500} />
        <div className="text-teal-600 font-bold text-2xl">PAGE NOT FOUND</div>
      </div>
    </div>
  );
}
