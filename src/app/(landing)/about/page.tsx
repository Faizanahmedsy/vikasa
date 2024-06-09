import TextV1 from "@/components/shared/Textv1";
import H2 from "@/components/shared/h2";
import TextV3 from "@/components/shared/textv3";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { SimpleCard_V1 } from "@/components/ui/card_v1";
import Wrapper from "@/components/wrapper";
import React from "react";

export default function AboutUSPage() {
  const data = [
    {
      title: "Our Mission",
      description:
        "lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Our Vision",
      description:
        "lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <Wrapper>
      <TextV1 className="leading-2 tracking-tight">
        Here at Vikasa, we believe in teamwork and creativity. Our team works
        together to create apps and websites that add meaning to your business.
      </TextV1>
      <div className="grid md:grid-cols-2 my-10">
        {data.map((item, index) => (
          <div key={index}>
            <SimpleCard_V1 data={item} />
          </div>
        ))}
        {/* <SimpleCard_V1 /> */}
      </div>
      <div>
        <div className="text-center">
          <H2>We are a team of masterminds</H2>
        </div>
        <div className="grid md:grid-cols-4 my-10 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <Card className="overflow-hidden h-full" key={index}>
              <img
                className="w-full h-48 object-cover overflow-hidden "
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <CardContent>
                <CardDescription className="pt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, fugit!
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
