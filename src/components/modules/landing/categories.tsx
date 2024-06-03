import H2 from "@/components/shared/h2";
import TextV3 from "@/components/shared/textv3";
import React from "react";

export default function Categories() {
  const data = [
    {
      title: "Web",
      sub: "lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ad?",
    },
    {
      title: "Mobile",
      sub: "lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ad?",
    },
    {
      title: "Desktop",
      sub: "lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ad?",
    },
    {
      title: "Cloud",
      sub: "lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ad?",
    },
    {
      title: "AI",
      sub: "lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ad?",
    },
    {
      title: "IoT",
      sub: "lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ad?",
    },
  ];

  return (
    <div className="bg-blue-200 relative py-12">
      <div>
        <H2 className="text-center">We offer</H2>

        <div className="grid  grid-cols-4 gap-4 px-32">
          {data.map((item, index) => (
            <div key={index} className="w-full p-4">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">{item.title}</div>
                <div className="text-center"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
