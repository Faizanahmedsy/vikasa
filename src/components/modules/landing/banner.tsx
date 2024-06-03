import { Button } from "@/components/ui/button";
import React from "react";

export default function Banner() {
  return (
    <div className="bg-[#1c64ff]  px-32 py-12">
      <div className="flex justify-between items-center bg-[#111471] p-12 rounded-3xl text-white">
        <div>
          <h2 className="font-bold text-4xl">Every Software tells a story</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <Button>Shop Now</Button>
        </div>
      </div>
    </div>
  );
}
