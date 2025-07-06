import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';

const initialFormState = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    gender: '',
    dob: '',
    country: '',
    hobbies: [] as string[],
    profilePic: null as File | null,
    bio: '',
};

export default function RegistrationForm() {
    const [form, setForm] = useState(initialFormState);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'file') {
            const file = (e.target as HTMLInputElement).files?.[0] || null;
            setForm((prev) => ({ ...prev, [name]: file }));
        } else if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            const hobby = value;
            setForm((prev) => ({
                ...prev,
                hobbies: checked ? [...prev.hobbies, hobby] : prev.hobbies.filter((h) => h !== hobby),
            }));
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (form.fullName.trim().length < 3) {
            newErrors.fullName = 'Full Name must be at least 3 characters.';
        }

        if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = 'Invalid email address.';
        }

        if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/.test(form.password)) {
            newErrors.password = 'Password must be at least 8 characters with letters and numbers.';
        }

        if (form.password !== form.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }

        if (!/^\d{10,}$/.test(form.phone)) {
            newErrors.phone = 'Phone number must be at least 10 digits.';
        }

        if (!form.gender) {
            newErrors.gender = 'Please select a gender.';
        }

        const birthDate = new Date(form.dob);
        const age = new Date().getFullYear() - birthDate.getFullYear();

        if (!form.dob || age < 18) {
            newErrors.dob = 'You must be at least 18 years old.';
        }

        if (!form.country) {
            newErrors.country = 'Please select a country.';
        }

        if (form.hobbies.length === 0) {
            newErrors.hobbies = 'Select at least one hobby.';
        }

        if (
            form.profilePic &&
            !['image/jpeg', 'image/png', 'image/jpg'].includes(form.profilePic.type)
        ) {
            newErrors.profilePic = 'Must be a valid .jpg, .jpeg, or .png file.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted successfully:', form);
            alert('Registration successful!');
            setForm(initialFormState);
            setErrors({});
        }
    };

    return (
        <>
            <span className={styles.title}>2. User Registration Form in React + TypeScript</span>
            <form className={styles.container} onSubmit={handleSubmit} noValidate>
                <h2 className={styles.subtitle}>User Registration</h2>

                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" value={form.fullName} onChange={handleChange} />
                {errors.fullName && <div className={styles.error}>{errors.fullName}</div>}

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} />
                {errors.email && <div className={styles.error}>{errors.email}</div>}

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={form.password} onChange={handleChange} />
                {errors.password && <div className={styles.error}>{errors.password}</div>}

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
                {errors.confirmPassword && <div className={styles.error}>{errors.confirmPassword}</div>}

                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} />
                {errors.phone && <div className={styles.error}>{errors.phone}</div>}

                <label>Gender</label>
                <div className={styles.radioGroup}>
                    {['Male', 'Female', 'Other'].map((gender) => (
                        <label key={gender}>
                            <input type="radio" name="gender" value={gender} checked={form.gender === gender} onChange={handleChange} />
                            {gender}
                        </label>
                    ))}
                </div>
                {errors.gender && <div className={styles.error}>{errors.gender}</div>}

                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob" value={form.dob} onChange={handleChange} />
                {errors.dob && <div className={styles.error}>{errors.dob}</div>}

                <label htmlFor="country">Country</label>
                <select id="country" name="country" value={form.country} onChange={handleChange}>
                    <option value="">Select Country</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
                {errors.country && <div className={styles.error}>{errors.country}</div>}

                <label>Hobbies</label>
                <div className={styles.checkboxGroup}>
                    {['Reading', 'Traveling', 'Gaming'].map((hobby) => (
                        <label key={hobby}>
                            <input
                                type="checkbox"
                                name="hobbies"
                                value={hobby}
                                checked={form.hobbies.includes(hobby)}
                                onChange={handleChange}
                            />
                            {hobby}
                        </label>
                    ))}
                </div>
                {errors.hobbies && <div className={styles.error}>{errors.hobbies}</div>}

                <label htmlFor="profilePic">Profile Picture</label>
                <input type="file" id="profilePic" name="profilePic" accept=".jpg,.jpeg,.png" onChange={handleChange} />
                {errors.profilePic && <div className={styles.error}>{errors.profilePic}</div>}

                <label htmlFor="bio">Bio</label>
                <textarea
                    id="bio"
                    name="bio"
                    value={form.bio}
                    onChange={handleChange}
                    maxLength={300}
                />
                <div className={styles.remaining}>{300 - form.bio.length} characters remaining</div>

                <button type="submit" className={styles.submitButton}>Register</button>
            </form>
        </>
    );
}
