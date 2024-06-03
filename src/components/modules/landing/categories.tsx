import Wrapper from "@/components/wrapper";
import { cn } from "@/lib/utils";
import React from "react";

export default function Categories() {
  return (
    <Wrapper>
      <div className="flex justify-center items-center flex-col">
        <TextSubTitle className="">Categories</TextSubTitle>
        <CategoriesBento />
      </div>
    </Wrapper>
  );
}

function TextSubTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("text-4xl font-bold p-2", className)}>{children}</h2>
  );
}
function TextTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-4xl font-bold">{children}</h1>;
}

function CategoriesBento() {
  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        <KittyCards />
        <KittyCards />
        <KittyCards />
        <KittyCards />

        {/* <KittyCards>T shirts</KittyCards> */}
        {/* <div>Jeans</div>
        <div>Joggers</div> */}
      </div>

      {/* <div className="grid grid-cols-3 gap-5">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          corporis tenetur corrupti ab officia adipisci fuga illum doloremque
          optio necessitatibus!
        </div>
        <div className="col-span-2">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            optio voluptate nisi saepe assumenda enim porro mollitia qui
            sapiente similique.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            optio voluptate nisi saepe assumenda enim porro mollitia qui
            sapiente similique.
          </div>
        </div>
      </div> */}
    </>
  );
}

function KittyCards() {
  return (
    <div className="p-6">
      <div className="flex justify-center items-center">
        <div className="h-[300px] w-[250px] bg-slate-200"></div>
      </div>
      <div>Sexy Jeans</div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vitae.
      </div>
    </div>
  );
}
