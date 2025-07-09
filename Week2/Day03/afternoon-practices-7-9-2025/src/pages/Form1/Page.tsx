import { FC } from "react";
import SignIn from "@/components/Form/SignIn";
import SignUp from "@/components/Form/SignUp";

const Form1: FC = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col px-10">
                <div className="p-10 bg-[#F8C0BD] rounded-2xl flex flex-wrap gap-5 justify-center">
                    <SignIn />
                    <SignUp />
                </div>
            </div>
        </>
    );
};

export default Form1;
