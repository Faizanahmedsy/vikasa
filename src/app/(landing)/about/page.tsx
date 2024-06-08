import TextV1 from "@/components/shared/Textv1";
import TextV3 from "@/components/shared/textv3";
import { SimpleCard_V1 } from "@/components/ui/card_v1";
import Wrapper from "@/components/wrapper";
import React from "react";

export default function AboutUSPage() {
  return (
    <Wrapper>
      <TextV1 className="leading-2 tracking-tight">
        Here at Aveosoft, we believe in teamwork and creativity. Our team works
        together to create apps and websites that add meaning to your business.
      </TextV1>
      <div className="grid grid-cols-3 my-10">
        <SimpleCard_V1 />
        <SimpleCard_V1 />
        <SimpleCard_V1 />
      </div>
    </Wrapper>
  );
}
