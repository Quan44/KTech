'use client';

import { signIn, useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

export const LoginForm = ({ csrfToken }: { csrfToken: string | undefined }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

    const { status } = useSession()

    React.useEffect(() => {
        if (status === 'authenticated') {
            router.push(callbackUrl);
        }
    }, [status, router, callbackUrl])


    const [loading, setLoading] = useState({
        accLoading: false,
        googleLoading: false,
        facebookLoading: false
    });
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading({
                ...loading,
                accLoading: true,
            });
            setFormValues({ email: 'john@mail.com', password: 'changeme' });

            const res = await signIn('credentials', {
                redirect: false,
                email: formValues.email,
                password: formValues.password,
                csrfToken,
                callbackUrl,
            });

            setLoading({
                ...loading,
                accLoading: false,
            });

            if (!res?.error) {
                router.push(callbackUrl);
            } else {
                setError('Invalid email or password');
            }
        } catch (error: unknown) {
            setLoading({
                ...loading,
                accLoading: false,
            });
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unexpected error occurred');
            }
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // const handleLoginProvider = async (provider: string) => {
    //     try {
    //         setLoading({
    //             ...loading,
    //             googleLoading: provider === 'google',
    //             facebookLoading: provider === 'facebook'
    //         });
    //         const res = await signIn(provider, { redirect: false, callbackUrl });
    //         console.log('handleLoginProvider', res);
    //         //TODO: add new usser Account after then login Provider
    //         if (!res?.error) {
    //             router.push(callbackUrl);
    //         } else {
    //             setError('invalid email or password');
    //         }
    //     } catch (error: unknown) {
    //         setLoading({
    //             ...loading,
    //             googleLoading: false,
    //             facebookLoading: false
    //         });
    //         if (error instanceof Error) {
    //             setError(error.message);
    //         } else {
    //             setError('An unexpected error occurred');
    //         }
    //     }
    // }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login to your account</h2>
                <form onSubmit={onSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="username" className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            required type="email" name="email" value={formValues.email} onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
                        <input
                            required type="password" name="password" value={formValues.password} onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={loading.accLoading}
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        {loading.accLoading ? 'loading...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    )
}