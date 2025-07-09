import { FC } from "react";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
    email: string
}

const signinSchema = yup
    .object({
        email: yup.string().email().required(),
    })
    .required();

const SignIn: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: yupResolver(signinSchema),
    })
    const onSubmit = (data: any) => console.log(data)

    return (
        <>
            <div className="min-h-screen flex flex-col p-10">
                <div className="p-10 bg-[#F8C0BD] rounded-2xl">
                    {/* Form 1 */}
                    <div className="relative w-full max-w-sm bg-cover bg-[url(/public/assets/background.png)] p-5 rounded-2xl">
                        <div className="text-white text-2xl p-2 mb-20"><MdArrowBackIos /></div>
                        <h2 className="text-white text-3xl font-bold p-2 mb-5">Hi!</h2>
                        <div className="relative z-10 backdrop-blur-md rounded-3xl p-2 space-y-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    {...register("email")}
                                    placeholder="Email"
                                    className="w-full mb-5 px-4 py-2 rounded bg-white text-black placeholder:text-gray-500 focus:outline-none"
                                />
                                <p>{errors.email?.message}</p>
                                <button
                                    className="w-full bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-600 transition">
                                    Continue
                                </button>
                            </form>

                            <div className="text-center text-white">or</div>

                            <button className="w-full bg-white flex items-center justify-center gap-2 py-2 rounded hover:bg-gray-100 transition">
                                <FaFacebookF className="text-blue-600" />
                                <span>Continue with Facebook</span>
                            </button>
                            <button className="w-full bg-white flex items-center justify-center gap-2 py-2 rounded hover:bg-gray-100 transition">
                                <FcGoogle />
                                <span>Continue with Google</span>
                            </button>
                            <button className="w-full bg-white flex items-center justify-center gap-2 py-2 rounded hover:bg-gray-100 transition">
                                <FaApple />
                                <span>Continue with Apple</span>
                            </button>

                            <div className="text-white text-sm space-y-1">
                                <p>
                                    Don’t have an account?{" "}
                                    <a href="#" className="text-green-400 underline">
                                        Sign up
                                    </a>
                                </p>
                                <a href="#" className="text-green-400 underline">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
