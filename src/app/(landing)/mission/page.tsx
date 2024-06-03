import H2 from "@/components/shared/h2";
import Wrapper from "@/components/wrapper";
import Image from "next/image";
import React from "react";

export default function MissionPage() {
  return (
    <Wrapper className="min-h-screen">
      <div className="text-2xl font-medium p-6">Our Mission</div>

      <div className="grid grid-cols-2 gap-4 p-6">
        <div className="p-4">
          <Image src="/crossing.svg" alt="" height={700} width={700} />
        </div>
        <div className="p-4 flex justify-center items-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
          cumque nulla repellat veritatis reiciendis nisi consequuntur dolore
          itaque eum voluptatibus in vitae necessitatibus tempora temporibus
          ratione tenetur consequatur perferendis alias hic minus ipsum? Placeat
          ea impedit voluptatibus vero obcaecati nobis? Placeat nemo aliquid vel
          voluptas quo unde itaque in illum!
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 p-6">
        <div className="p-4 flex justify-center items-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla at
          nemo itaque praesentium voluptates, voluptatibus dolores eligendi sed
          fugiat blanditiis ea quas corporis quod nesciunt dignissimos? Odit quo
          modi magnam omnis tenetur dolores aspernatur officiis distinctio
          ratione ipsum, non voluptatibus.
        </div>
        <div className="p-4">
          <Image src="/map.svg" alt="" height={700} width={700} />
        </div>
      </div>
    </Wrapper>
  );
}
