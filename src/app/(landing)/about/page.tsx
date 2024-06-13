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
    <>
      <Wrapper>
        <TextV1 className="leading-2 tracking-tight">
          Here at Vikasa, we believe in teamwork and creativity. Our team works
          together to create apps and websites that add meaning to your
          business.
        </TextV1>
        <div className="grid md:grid-cols-2 my-10">
          {data.map((item, index) => (
            <div key={index}>
              <SimpleCard_V1 data={item} />
            </div>
          ))}
          {/* <SimpleCard_V1 /> */}
        </div>
        <section>
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
                  lorem ipsum foo foo
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Released on December 2, 2021
                </time>
                <p className="text-base font-normal text-gray-300 dark:text-gray-400">
                  Get started with dozens of web components and interactive
                  elements.
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
                  lorem ipsum foo foo
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Released on December 23, 2021
                </time>
                <p className="text-base font-normal text-gray-300 dark:text-gray-400">
                  Get started with dozens of web components and interactive
                  elements.
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
                  lorem ipsum foo foo
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Released on January 5, 2022
                </time>
                <p className="text-base font-normal text-gray-300 dark:text-gray-400">
                  Get started with dozens of web components and interactive
                  elements.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
