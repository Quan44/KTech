import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
    username: string,
    password: string,
    rememberMe: boolean,
}

const schema = yup
    .object({
        username: yup
            .string()
            .required("Username is required")
            .min(5, "Username must be at least 5 characters")
            .test("email-or-phone", "Username must be a valid email or phone number", (value) => {
                if (!value) return false;
                const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                const isPhone = /^\d{10,15}$/.test(value);
                return isEmail || isPhone;
            }),
        password: yup
            .string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(/[A-Za-z]/, "Password must contain at least one letter")
            .matches(/^\S*$/, "Password must not contain spaces"),
        rememberMe: yup.boolean().default(false),

    })
    .required();

const Form3 = () => {
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
        <div className="relative flex w-full h-full px-10">
            {/* Left side - Image + text */}
            <div className="w-full bg-[#ECF1F4] flex-1 justify-center p-20">
                <h1 className="text-4xl font-bold text-gray-800">
                    Set Your Partner Recruitment on Auto-Pilot
                </h1>
                <div className="h-full bg-no-repeat bg-[url(/public/assets/grovia.png)]"/>
            </div>

            {/* Right side - Form */}
            <div className="w-1/3 flex flex-col bg-white justify-center px-15 pb-15 pt-5">
                <h2 className="text-2xl font-bold text-[#c0392b] mb-10">Grovia</h2>
                <h2 className="text-2xl font-bold text-[#c0392b] mb-2">Login</h2>
                <p className="text-gray-900 mb-6 text-sm">
                    <span className="font-bold">Login to your account</span><br />
                    Thank you for getting back to Grovia. Let’s access your best recommendation contact.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-5">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            {...register("username")}
                            placeholder="Email or Phone Number"
                            className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <p className="text-red-600 mb-5">{errors.username?.message}</p>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            {...register("password")}
                            placeholder="Password"
                            className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <p className="text-red-600 mb-5">{errors.password?.message}</p>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2">
                            <input
                                {...register("rememberMe")}
                                type="checkbox"
                                className="accent-red-600"
                            />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="text-red-600 hover:underline">Reset Password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold"
                    >
                        SIGN IN
                    </button>
                </form>

                <p className="text-sm mt-6">
                    Don’t have an account yet?{" "}
                    <a href="#" className="text-red-600 font-medium hover:underline">
                        Join Grovia Now!
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Form3;
