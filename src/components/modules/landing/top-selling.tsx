import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Wrapper from "@/components/wrapper";
import Image from "next/image";
import React from "react";

export default function TopSelling() {
  return (
    <Wrapper>
      <div className="grid grid-cols-4">
        <Card className="w-full h-full  flex flex-col justify-between">
          <CardContent>
            <div className="pt-2">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="asm"
                width={400}
                height={400}
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col">
            <div className="w-full">
              <div>Grey - Cotton T shirt for men</div>
              <div>T shirt</div>
              <div className="flex gap-3">
                <div>7999 ₹</div>
                <div>10000 ₹</div>
                <div>90 % off</div>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <Button variant="outline">Add to cart</Button>
              <Button>Buy</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </Wrapper>
  );
}
