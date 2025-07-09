import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    password: string,
    confirmPassword: string,
    checkbox1: boolean,
    checkbox2: boolean,
}

const schema = yup
    .object({
        firstName: yup
            .string()
            .required("First name is required")
            .min(2, "First name must be at least 2 characters"),
        lastName: yup
            .string()
            .required("Last name is required")
            .min(2, "Last name must be at least 2 characters"),
        phoneNumber: yup
            .string()
            .required("Phone number is required")
            .matches(/^\d{10,15}$/, "Phone number must be 10 to 15 digits"),
        email: yup.string().email("Email must be a valid email").required("Email is required"),
        password: yup
            .string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter")
            .matches(/\d/, "Password must contain at least one number")
            .matches(/^\S*$/, "Password must not contain spaces"),

        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "Passwords must match")
            .required("Confirm Password is required"),
        checkbox1: yup.boolean().default(false),
        checkbox2: yup
            .boolean()
            .oneOf([true], "You must agree to the terms to proceed")
            .required("You must accept Terms")
    })
    .required();

const Form2: FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data: Inputs) => {
        console.log(data);
        reset();
    }

    return (
        <>
            <section>
                <div className="flex bg-base-200 w-full min-h-screen justify-center bg-amber-50 p-10">
                    <div className="flex w-full h-full">
                        {/* Left Content */}
                        <div className="relative flex-1/3">
                            <div className="h-full bg-blue-600 text-white flex flex-col justify-center items-center p-8">
                                <h1 className="text-2xl font-semibold mb-4">Lottery Display</h1>
                                <p className="text-xl mb-4 text-center max-w-xs">
                                    A few clicks away from creating your Lottery Display
                                </p>
                                <img src="public/assets/267.pngs" alt="MerQyan" />
                            </div>
                        </div>
                        {/* Right Content */}
                        <div className="flex-1/2">
                            <div className="flex items-center justify-center p-8 bg-white">
                                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl space-y-6">
                                    <h2 className="text-3xl font-bold">Register</h2>
                                    <p className="text-xl text-gray-600">
                                        Manage all your lottery efficiently
                                    </p>
                                    {/* Grid Input */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                                                First Name
                                            </label>
                                            <input
                                                {...register("firstName")}
                                                id="firstName"
                                                placeholder="First Name"
                                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                            <p className="text-red-600">{errors.firstName?.message}</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="lasttName" className="text-sm font-medium text-gray-700">
                                                Last Name
                                            </label>
                                            <input
                                                {...register("lastName")}
                                                id="lastName"
                                                placeholder="Last Name"
                                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                            <p className="text-red-600">{errors.lastName?.message}</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                                                Phone Number
                                            </label>
                                            <input
                                                {...register("phoneNumber")}
                                                id="phone"
                                                placeholder="Phone Number"
                                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                            <p className="text-red-600">{errors.phoneNumber?.message}</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="enail" className="text-sm font-medium text-gray-700">
                                                Email
                                            </label>
                                            <input
                                                {...register("email")}
                                                id="email"
                                                placeholder="Email"
                                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                            <p className="text-red-600">{errors.email?.message}</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                                Password
                                            </label>
                                            <input
                                                {...register("password")}
                                                type="password"
                                                id="password"
                                                placeholder="Password"
                                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                            <p className="text-red-600">{errors.password?.message}</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                                                Confirm Password
                                            </label>
                                            <input
                                                {...register("confirmPassword")}
                                                type="password"
                                                id="confirmPassword"
                                                placeholder="Confirm Password"
                                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                            <p className="text-red-600">{errors.confirmPassword?.message}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2 text-sm">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" {...register("checkbox1")} />
                                            <span>Yes, I want to receive Lottery Display emails</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" {...register("checkbox2")} />
                                            <span>
                                                I agree to all the{" "}
                                                <a href="#" className="text-blue-600 underline">
                                                    Term, Privacy Policy
                                                </a>{" "}
                                                and <a href="#" className="text-blue-600 underline">Fees</a>
                                            </span>
                                            <p className="text-red-600">{errors.checkbox2?.message}</p>
                                        </label>
                                    </div>

                                    <button className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition">
                                        Create Account
                                    </button>

                                    <p className="text-sm text-center">
                                        Already have an account?{" "}
                                        <a href="#" className="text-blue-600 font-medium hover:underline">
                                            Log in
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Form2;
