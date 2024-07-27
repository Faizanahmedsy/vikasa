import { SectionTitle } from "@/components/shared";
import H2 from "@/components/shared/h2";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Wrapper from "@/components/wrapper";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

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

  const items = [
    {
      title: "Frontend web development",
      description:
        "Delve into building engaging and interactive user interfaces for the web.",
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Backend web development",
      description:
        "Explore server-side technologies and databases to power robust applications.",
      header: <Skeleton />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "UI/UX design",
      description:
        "Focus on crafting user-centered designs to enhance the overall experience.",
      header: <Skeleton />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Uncover how artificial intelligence and machine learning are transforming industries.",
      header: <Skeleton />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Data Analytics",
      description:
        "Learn to analyze and interpret complex data to drive decision-making and strategy.",
      header: <Skeleton />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "IOS Development",
      description:
        "Master the skills needed to create applications for Apple's iOS platform.",
      header: <Skeleton />,
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Android Development",
      description:
        "Develop expertise in building applications for the Android ecosystem.",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
  return (
    <Wrapper>
      <SectionTitle>We offer a wide range of services</SectionTitle>
      <BentoGrid className="max-w-[82rem] mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </Wrapper>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
