import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wrapper";
import React from "react";
import KtyGrad01 from "@/components/kitty/gradiants/kty-grad-01";

export default function Hero() {
  return (
    <>
      <KtyGrad01 />
      <div className="h-[calc(100vh-100px)] flex justify-center items-center gap-4 px-32 z-10 relative">
        <div className="flex py-6">
          <div className="w-full flex justify-between flex-col">
            <h1 className="text-6xl font-bold">
              Build like a team of hundreds_
            </h1>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              ad?
            </div>
          </div>
          <div className="w-full space-y-5 px-6">
            <div className="font-medium text-2xl">
              Build your entire backend within minutes and scale effortlessly
              using Appwrite&apos;s open-source platform. Add Authentication,
              Databases, Functions, Storage, and Messaging to your projects
              using the frameworks and languages of your choice.
            </div>
            <Button>View the projects</Button>
          </div>
        </div>
      </div>
    </>
  );
}
