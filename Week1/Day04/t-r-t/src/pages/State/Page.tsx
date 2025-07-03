import ColorSelect from "@/components/ColorSelect";
import Rating from "@/components/Rating";
import State03 from "@/components/State03";
import State04 from "@/components/State04";
import { FC } from "react";

const State: FC = () => {
  return (
    <>
      <section className="h-screen w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center bg-base-200 w-full h-full bg-slate-300 gap-4">
            <ColorSelect />
            <Rating />
            <State03 />
            <State04 />
        </div>
      </section>
    </>
  );
};

export default State;
