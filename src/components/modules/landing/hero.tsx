import Wrapper from "@/components/wrapper";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="h-[calc(100vh-100px)] ">
        <div className="bg-brand-primary">
          <Wrapper>
            <div className="flex items-center justify-between">
              <div className="p-5">
                <h1 className="text-4xl font-bold text-white">
                  Welcome to Shaby Wear
                </h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, ad?
                </p>
                <button className="bg-white text-brand-primary px-5 py-2 rounded-lg mt-5">
                  Shop Now
                </button>
              </div>
              <div className="p-5">
                <img
                  src="https://via.placeholder.com/500"
                  alt="hero"
                  className="w-full"
                />
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </>
  );
}
