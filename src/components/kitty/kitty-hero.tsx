import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { poppins } from "@/lib/fonts";

const KittyHero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full md:min-h-[670px] text-center p-16 pt-24 md:p-40">
      <h1
        className={cn(
          "animate-fade-in [--ani-delay:200ms] opacity-0 translate-y-[-1rem] text-4xl  md:text-6xl font-bold py-7",
          poppins.className
        )}
      >
        Become as <span className="text-brand-primary ">smart</span> as a fox
        and as diligent as a <span className="text-brand-primary">donkey</span>
      </h1>

      <p
        className={cn(
          "animate-fade-in [--ani-delay:400ms] opacity-0 translate-y-[-1rem] md:text-2xl font-semibold text-zinc-500 md:px-40"
        )}
      >
        Smart Donkey is a goldmine of resources collected from all over the
        internet to help you learn things that actually matters in life
        {/* Learn things that actually matters in life, and makes you a good and
        successful person. */}
      </p>

      <div className="animate-fade-in justify-center [--ani-delay:600ms] opacity-0 translate-y-[-1rem] flex-col md:flex-row w-full flex gap-6 md:gap-4 m-4">
        <Button variant="outline">Explore</Button>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default KittyHero;
