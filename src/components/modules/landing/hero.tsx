import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import SparklesText from "@/components/magicui/sparkles-text";
import TextV3 from "@/components/shared/textv3";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>
      <div className="h-[calc(100vh-100px)] flex justify-center items-center gap-4 md:px-32 px-10 z-10 relative">
        <div className="lg:flex py-6">
          <div className="w-full flex justify-between flex-col">
            <h1 className="md:text-6xl text-4xl font-bold">
              Build like a team of hundreds with
              <span>{/* <SparklesText text="Vikasa" /> */}</span>
            </h1>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              ad?
            </div>
          </div>
          <div className="w-full space-y-5 lg:px-6 py-10 md:py-0">
            <TextV3>
              Build your entire backend within minutes and scale effortlessly
              using Appwrite&apos;s open-source platform. Add Authentication,
              Databases, Functions, Storage, and Messaging to your projects
              using the frameworks and languages of your choice.
            </TextV3>
            <div className="md:flex gap-4">
              <Button className="w-full md:w-auto">View the projects</Button>
              <div className="flex justify-center items-center">
                <AnimatedShinyText className="inline-flex items-center justify-start px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>✨ Introducing New Services</span>
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
