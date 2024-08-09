import Wrapper from "@/components/wrapper";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  const recruitmentServices = [
    {
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit possimus consequuntur molestias accusamus. Error nemo id assumenda. At dolore veniam aperiam libero porro modi molestias tenetur fuga sapiente incidunt.",
      img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit possimus consequuntur molestias accusamus. Error nemo id assumenda. At dolore veniam aperiam libero porro modi molestias tenetur fuga sapiente incidunt.",
      img: "https://images.pexels.com/photos/7465697/pexels-photo-7465697.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit possimus consequuntur molestias accusamus. Error nemo id assumenda. At dolore veniam aperiam libero porro modi molestias tenetur fuga sapiente incidunt.",
      img: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit possimus consequuntur molestias accusamus. Error nemo id assumenda. At dolore veniam aperiam libero porro modi molestias tenetur fuga sapiente incidunt.",
      img: "https://images.pexels.com/photos/5989935/pexels-photo-5989935.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit possimus consequuntur molestias accusamus. Error nemo id assumenda. At dolore veniam aperiam libero porro modi molestias tenetur fuga sapiente incidunt.",
      img: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <Wrapper>
      <h2>Industries we serve</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {recruitmentServices.map((service, index) => (
          <div
            key={index}
            className="relative  space-y-4 border-2 rounded-lg bg-white transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            {service.img && (
              <div className="relative h-32  overflow-hidden rounded-t-lg">
                <img
                  src={service.img && service.img}
                  className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[#003366] opacity-50 z-10"></div>
                <h3 className="absolute top-10 left-0 w-full p-4 text-xl font-bold text-white z-20">
                  {service.title}
                </h3>
              </div>
            )}
            <p className="relative p-6 text-sm text-gray-700 z-10">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
