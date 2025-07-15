import styles from './RegistrationForm.module.css';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const isAtLeast18 = (date: Date) => {
    const today = new Date();
    const age = today.getFullYear() - date.getFullYear();
    const m = today.getMonth() - date.getMonth();
    return age > 18 || (age === 18 && m >= 0);
};

const schema = yup.object({
    fullName: yup
        .string()
        .required("Full Name is required")
        .min(3, "Full Name must be at least 3 characters"),
    email: yup
        .string()
        .required("Email is required")
        .email("Must be a valid email"),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Za-z]/, "Password must contain letters")
        .matches(/[0-9]/, "Password must contain numbers"),
    confirmPassword: yup
        .string()
        .required("Please confirm your password")
        .oneOf([yup.ref('password')], "Passwords must match"),
    phone: yup
        .string()
        .required("Phone Number is required")
        .matches(/^\d{10,}$/, "Phone Number must be at least 10 digits"),
    gender: yup
        .string()
        .required("Gender is required")
        .oneOf(["Male", "Female", "Other"], "Select a valid gender"),
    dateOfBirth: yup
        .date()
        .typeError("Date of Birth is required")
        .required("Date of Birth is required")
        .test("age", "You must be at least 18 years old", isAtLeast18),
    country: yup
        .string()
        .required("Country is required")
        .notOneOf([""], "Please select a country"),
    hobbies: yup
        .array()
        .of(yup.string().oneOf(["Reading", "Traveling", "Gaming"]))
        .min(1, "Please select at least one hobby")
        .required(),
    profilePicture: yup
        .mixed()
        .required("Profile Picture is required")
        .test(
            "fileType",
            "Only .jpg, .jpeg, .png files are allowed",
            (value: any) => {
                if (!value || value.length === 0) return false;
                const file = value[0];
                return ["image/jpeg", "image/jpg", "image/png"].includes(file.type);
            }
        ),
    bio: yup
        .string()
        .max(300, "Bio cannot exceed 300 characters")
        .required(),
}).required();

type FormData = yup.InferType<typeof schema>;

export default function RegistrationForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        watch,
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        mode: "onChange",
    })
    
    const onSubmit = (data: FormData) => {
        console.log(data);
        reset();
    }

    const bioValue = watch("bio") || "";

    return (
        <>
            <form className={styles.container} autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                <h2 className={styles.subtitle}>User Registration</h2>

                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" {...register("fullName")} />
                {errors.fullName && <p className="text-red-600">{errors.fullName?.message}</p>}

                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")} />
                {errors.email && <p className="text-red-600">{errors.email?.message}</p>}

                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register("password")} />
                {errors.password && <p className="text-red-600">{errors.password?.message}</p>}

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" {...register("confirmPassword")} />
                {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword?.message}</p>}

                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" {...register("phone")} />
                {errors.phone && <p className="text-red-600">{errors.phone?.message}</p>}

                <label>Gender</label>
                <div className={styles.radioGroup}>
                    {['Male', 'Female', 'Other'].map((gender) => (
                        <label key={gender}>
                            <input type="radio" value={gender} {...register("gender")} />
                            {gender}
                        </label>
                    ))}
                </div>
                {errors.gender && <p className="text-red-600">{errors.gender?.message}</p>}

                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" {...register("dateOfBirth")} />
                {errors.dateOfBirth && <p className="text-red-600">{errors.dateOfBirth?.message}</p>}


                <label htmlFor="country">Country</label>
                <select id="country" {...register("country")}>
                    <option value="">Select Country</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
                {errors.country && <p className="text-red-600">{errors.country?.message}</p>}


                <label>Hobbies</label>
                <div className={styles.checkboxGroup}>
                    {['Reading', 'Traveling', 'Gaming'].map((hobby) => (
                        <label key={hobby}>
                            <input
                                type="checkbox"
                                value={hobby}
                                {...register("hobbies")}
                            />
                            {hobby}
                        </label>
                    ))}
                </div>
                {errors.hobbies && <p className="text-red-600">{errors.hobbies?.message}</p>}

                <label htmlFor="profilePic">Profile Picture</label>
                <input type="file" id="profilePic" {...register("profilePicture")} />
                {errors.profilePicture && <p className="text-red-600">{errors.profilePicture?.message}</p>}

                <label htmlFor="bio">Bio</label>
                <textarea
                    id="bio"
                    {...register("bio")}
                    maxLength={300}
                />
                <div className={styles.remaining}>{300 - bioValue.length} characters remaining</div>

                <button type="submit" className={styles.submitButton}>Register</button>
            </form>
        </>
    );
}
