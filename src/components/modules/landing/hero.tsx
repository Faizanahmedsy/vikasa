import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wrapper";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="h-[calc(100vh-100px)] flex justify-center items-center">
        <Wrapper>
          <div className="flex items-center justify-between">
            <div className="w-full flex flex-col">
              <h1 className="text-6xl font-bold">
                Build like a team of hundreds_
              </h1>
              <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, ad?
              </div>
            </div>
            <div className="p-5 w-full space-y-12">
              <div className="font-medium text-2xl">
                Build your entire backend within minutes and scale effortlessly
                using Appwrite&apos;s open-source platform. Add Authentication,
                Databases, Functions, Storage, and Messaging to your projects
                using the frameworks and languages of your choice.
              </div>
              <Button>Shop Now</Button>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
