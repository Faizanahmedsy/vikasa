import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import H2 from "../shared/h2";

export default function ServicesSection() {
  const cardContent = [
    {
      title: "NHAI/Highways/Roads",
      image: "https://source.unsplash.com/400x300/?road",
    },
    {
      title: "Irrigation/Canals/Dams",
      image: "https://source.unsplash.com/400x300/?dam",
    },
    {
      title: "Bridges/Flyovers",
      image: "https://source.unsplash.com/400x300/?bridge",
    },
  ];

  return (
    <div className="flex justify-center flex-col gap-4 items-center py-10 px-32 my-20 bg-teal-50">
      <H2>Services</H2>

      <div className="grid grid-cols-3 gap-4">
        {cardContent.map((content, index) => (
          <Card className="" key={index}>
            <CardHeader>
              <CardTitle className="text-center">{content.title}</CardTitle>
              {/* <CardDescription>
                Deploy your new project in one-click.
              </CardDescription> */}
            </CardHeader>
            <CardContent>
              <img src={content.image} alt="" />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button className="w-full">View</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
