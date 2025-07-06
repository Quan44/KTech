import Calculator from "@/components/Calculator/Calculator";
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";
import { FC } from "react";

const HomeWork: FC = () => {
    return (
        <>
            <section>
                <div className="flex flex-col p-5 bg-base-200 w-full gap-5">
                    <h1 className="text-3xl font-bold">Home Work Day 05</h1>
                    <Calculator />
                    <RegistrationForm />
                </div>
            </section>
        </>
    );
};

export default HomeWork;
