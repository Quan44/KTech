import Counter from "@/components/ButtonCounter";
import CheckboxToggle from "@/components/CheckboxToggle";
import DoubleClickMessage from "@/components/DoubleClickMessage";
import DropdownSelection from "@/components/DropdownSelection";
import FormSubmit from "@/components/FormSubmit";
import HoverHighlight from "@/components/HoverHighlight";
import InputEventHandle from "@/components/InputEventHandle";
import KeyPressDisplay from "@/components/KeyPressDisplay";
import SearchFilter from "@/components/SearchFilter";
import ToggleSwitch from "@/components/ToggleSwitch";
import { FC } from "react";

const EventHanding: FC = () => {
  return (
    <>
      <section>
        <div className="flex flex-col p-5 bg-base-200 w-full gap-5">
          <h1 className="text-3xl font-bold">Event Handing Practices</h1>
          <Counter />
          <InputEventHandle />
          <ToggleSwitch />
          <HoverHighlight />
          <FormSubmit />
          <KeyPressDisplay />
          <DoubleClickMessage />
          <DropdownSelection />
          <CheckboxToggle />
          <SearchFilter />
        </div>
      </section>
    </>
  );
};

export default EventHanding;
