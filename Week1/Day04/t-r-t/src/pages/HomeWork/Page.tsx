import ButtonAccordtions from "@/components/ButtonAccordtions";
import ButtonTab from "@/components/ButtonTabs";
import LikeButton from "@/components/LikeButton";
import Slide1 from "@/components/Slide1";
import { FC } from "react";

const HomeWork: FC = () => {
  return (
    <>
      <section className="h-screen w-full flex items-center justify-center">
        <div className="flex flex-col justify-items-start bg-base-200 w-full h-full p-5 gap-4">
            <span className="font-bold text-4xl">Homework Session 02</span>
            <span className="font-bold text-2xl">1. Like Button</span>
            <LikeButton />
            <span className="font-bold text-2xl">2.Slide with Thumb</span>
            <Slide1 />
            <span className="font-bold text-2xl">3.Button Tabs</span>
            <ButtonTab />
            <span className="font-bold text-2xl">4.Button Accordtions</span>
            <ButtonAccordtions />
        </div>
      </section>
    </>
  );
};

export default HomeWork;
