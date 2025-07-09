import { FC } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
    name: string,
    password: string,
}

const signupSchema = yup
    .object({
        name: yup.string().required("Name is required"),
        password: yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
            .matches(/[0-9]/, 'Password must contain at least one number'),

    })
    .required();

const SignUp: FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: yupResolver(signupSchema),
    })
    const onSubmit = (data: Inputs) => {
        console.log(data);
        reset();
    }

    return (
        <>
            <div className="relative w-full max-w-sm bg-cover bg-[url(/public/assets/background.png)] p-5 rounded-2xl">
                <div className="text-white text-2xl p-2 mb-20"><MdArrowBackIos /></div>
                <h2 className="text-white text-3xl font-bold p-2 mb-5">Sign up!</h2>
                <div className="relative z-10 backdrop-blur-md rounded-3xl p-5 space-y-4 bg-white/10 w-full max-w-sm">
                    <div className="text-white text-sm space-y-1">
                        <p>Look like you don't have an account. Let's create a new account</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("name")}
                            placeholder="Name"
                            className="w-full mb-5 px-4 py-2 rounded bg-white text-black placeholder:text-gray-500 focus:outline-none"
                        />
                        <p className="text-white mb-5">{errors.name?.message}</p>
                        <input
                            type="password"
                            {...register("password")}
                            placeholder="Password"
                            className="w-full mb-5 px-4 py-2 rounded bg-white text-black placeholder:text-gray-500 focus:outline-none"
                        />
                        <p className="text-white mb-5">{errors.password?.message}</p>
                        <button
                            className="w-full bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-600 transition">
                            Continue
                        </button>
                    </form>

                    <div className="text-white text-sm space-y-1">
                        <p>
                            By selecting Agree and continue below, I agree to{" "}
                            <a href="#" className="text-green-400 underline">
                                Terms of Service and Privacy Policy
                            </a>
                        </p>
                        <a href="#" className="text-green-400 underline">
                            Forgot your password?
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
