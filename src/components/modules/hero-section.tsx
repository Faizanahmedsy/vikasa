import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */}
      <div className="h-screen flex flex-col justify-start items-center px-32 pt-20">
        <div className="grid grid-cols-2">
          <div className=" z-10 py-32">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Building Tomorrow&apos;s Infrastructure, Today
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Transforming ideas into sustainable reality for a brighter future.
            </p>
            {/* <Button>Get in Touch</Button> */}
          </div>

          <div className="p-4 flex justify-center items-center">
            <Image src="/undraw1.svg" alt="" height={700} width={700} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

//  {
//    /* <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */
//  }
//  <div className="h-screen flex flex-col justify-center items-center">
//    <div className="text-center z-10">
//      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
//        Building Tomorrow&apos;s Infrastructure, Today
//      </h1>
//      <p className="text-lg md:text-xl mb-8">
//        Transforming ideas into sustainable reality for a brighter future.
//      </p>
//      {/* <Button>Get in Touch</Button> */}
//    </div>
//  </div>;

//  <div className="grid grid-cols-2 h-[600px] my-32 px-32 gap-5">
//    <div className="h-full flex flex-col items-start">
//      <h1 className="text-4xl md:text-6xl pt-32 font-extrabold mb-4 leading-tight">
//        Building Tomorrow&apos;s Infrastructure, Today
//      </h1>
//      <p className="text-lg md:text-xl mb-8">
//        Transforming ideas into sustainable reality for a brighter future.
//      </p>
//    </div>
//    <div className="flex justify-end">
//      <img
//        src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600"
//        alt=""
//      />
//    </div>
//  </div>;
