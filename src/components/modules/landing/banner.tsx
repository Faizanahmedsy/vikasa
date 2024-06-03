import { Button } from "@/components/ui/button";
import React from "react";

export default function Banner() {
  return (
    <div className="bg-[#FF6868]  px-32 py-24 text-white">
      <div className="flex justify-between items-center ">
        <div>
          <h2 className="font-bold text-4xl">Every Outfit tells a story</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <Button>Shop Now</Button>
        </div>
      </div>
    </div>
  );
}
