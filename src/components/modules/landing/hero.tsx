import TextV3 from "@/components/shared/textv3";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <>
      <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>
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
            <TextV3>
              Build your entire backend within minutes and scale effortlessly
              using Appwrite&apos;s open-source platform. Add Authentication,
              Databases, Functions, Storage, and Messaging to your projects
              using the frameworks and languages of your choice.
            </TextV3>
            <Button>View the projects</Button>
          </div>
        </div>
      </div>
    </>
  );
}
