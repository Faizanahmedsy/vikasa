import Wrapper from "@/components/wrapper";
import React from "react";

export default function HeroV2() {
  return (
    <>
      {/* <div className="h-[calc(100vh-100px)] "> */}
      <div className="bg-brand-primary rounded-xl mx-6">
        <Wrapper>
          <div className="flex items-center justify-between py-32">
            <h1 className="text-4xl font-bold text-white">
              Welcome to Shaby Wear
            </h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              ad?
            </p>
            <button className="bg-white text-brand-primary px-5 py-2 rounded-lg mt-5">
              Shop Now
            </button>
          </div>
        </Wrapper>
      </div>
      {/* </div> */}
    </>
  );
}
