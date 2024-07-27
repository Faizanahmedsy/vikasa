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
        "To provide innovative and customized IT solutions that empower businesses to thrive in the digital world. We strive to deliver excellence through a team of skilled professionals and cutting-edge technology.",
    },
    {
      title: "Our Vision",
      description:
        "To be a leading IT service provider, recognized globally for our commitment to quality, customer satisfaction, and technological innovation. We aim to create lasting value for our clients and partners.",
    },
  ];

  return (
    <>
      <Wrapper>
        <TextV1 className="leading-2 tracking-tight">
          At Vikasa, we specialize in delivering top-notch IT services. Our team
          is dedicated to helping businesses succeed in the digital age.
        </TextV1>
        <div className="grid md:grid-cols-2 my-10">
          {data.map((item, index) => (
            <div key={index}>
              <SimpleCard_V1 data={item} />
            </div>
          ))}
        </div>
        <section>
          <div className="text-center">
            <H2>Meet Our Expert Team</H2>
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
                    Our team consists of experienced professionals passionate
                    about delivering high-quality IT services to our clients.
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </Wrapper>

      <section className="bg-slate-900 md:py-10 md:px-32 px-10 py-5 ">
        <div className="text-center">
          <H2 className="text-blue-600">History & Milestones</H2>
        </div>

        <div className="my-10">
          <ol className="items-center sm:flex">
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-white dark:text-white">
                  Launch of Our First Product
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Released on December 2, 2021
                </time>
                <p className="text-base font-normal text-gray-300 dark:text-gray-400">
                  Our journey began with the launch of our first innovative
                  software solution, setting the stage for our future growth.
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-white">
                  Expansion into New Markets
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Released on December 23, 2021
                </time>
                <p className="text-base font-normal text-gray-300 dark:text-gray-400">
                  We expanded our services into new markets, broadening our
                  reach and capabilities.
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-white">
                  Recognition & Awards
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Released on January 5, 2022
                </time>
                <p className="text-base font-normal text-gray-300 dark:text-gray-400">
                  Our company received several awards for excellence in IT
                  services and customer satisfaction.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <Wrapper>
        <section>
          <div className="text-center">
            <H2>Life at Vikasa</H2>
          </div>
          <div className="my-10">
            <TextV3>
              At Vikasa, we foster a culture of innovation and collaboration.
              Our team enjoys a dynamic work environment where creativity and
              professional growth are highly valued.
            </TextV3>

            <div className="grid md:grid-cols-4 py-10 gap-4">
              <SimpleCard>5 Days Working</SimpleCard>
              <SimpleCard>Flexible Working Hours</SimpleCard>
              <SimpleCard>Awards & Recognition</SimpleCard>
              <SimpleCard>Friendly Work Culture</SimpleCard>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
}

const SimpleCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className="border p-3 rounded-lg">{children}</div>;
};
