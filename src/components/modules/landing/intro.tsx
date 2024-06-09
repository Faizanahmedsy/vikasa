import TextV4 from "@/components/shared/textv4";
import { Boxes } from "@/components/ui/background-boxes";
import { SITE_CONFIG } from "../../../../site.config";
import Wrapper from "@/components/wrapper";

export default function Intro() {
  return (
    <div className="md:h-96 h-[70%] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <Wrapper>
        <TextV4 className="text-white w-full">
          At {SITE_CONFIG.brandName}, we are dedicated to delivering top-notch
          service solutions tailored to meet the unique needs of our clients.
          With a strong foundation in innovation, quality, and customer
          satisfaction, we specialize in providing comprehensive [specific
          services, e.g., IT consulting, software development, digital
          marketing, etc.] that drive business success. Our team of seasoned
          professionals brings a wealth of experience and expertise, ensuring
          that every project is executed with precision and excellence. We pride
          ourselves on our ability to understand and adapt to the dynamic
          demands of various industries, delivering results that exceed
          expectations.
        </TextV4>
      </Wrapper>
    </div>
  );
}
