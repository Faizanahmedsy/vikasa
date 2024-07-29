import React from "react";
import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { IconCloudDemo } from "./tech-cloud";
import { SectionTitle } from "@/components/shared";

const WhyUs = () => {
  return (
    <Wrapper>
      <SectionTitle>Why Choose Vikasa?</SectionTitle>
      <div className="grid md:grid-cols-2 gap-20">
        <div className="hidden md:block">
          <IconCloudDemo />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-center items-center gap-4">
            <Image
              src="https://api.iconify.design/fluent-emoji/alarm-clock.svg"
              width={200}
              height={200}
              alt="24/7 Support"
            />
            <div>
              <h2 className="font-semibold text-xl md:text-2xl">
                24/7 Support
              </h2>
              <p>
                Our dedicated support team is available 24/7 to resolve any
                issues quickly and keep your operations running smoothly.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Image
              src="https://api.iconify.design/fluent-emoji/bullseye.svg"
              width={200}
              height={200}
              alt="Cutting-edge Solutions"
            />
            <div>
              <h2 className="font-semibold text-xl md:text-2xl">
                Cutting-edge Solutions
              </h2>
              <p>
                We leverage the latest technologies and innovative solutions to
                address your IT challenges and drive growth.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <Image
              src="https://api.iconify.design/fluent-emoji/dollar-banknote.svg"
              width={200}
              height={200}
              alt="Cost-Effective"
            />
            <div>
              <h2 className="font-semibold text-xl md:text-2xl">
                Cost-Effective
              </h2>
              <p>
                Our services are designed to be cost-effective, providing high
                value without compromising on quality.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Image
              src="https://api.iconify.design/fluent-emoji/wrapped-gift.svg"
              width={200}
              height={200}
              alt="Customizable Packages"
            />
            <div>
              <h2 className="font-semibold text-xl md:text-2xl">
                Customizable Packages
              </h2>
              <p>
                We offer customizable service packages tailored to meet the
                unique needs of your business, ensuring you receive the right
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default WhyUs;
