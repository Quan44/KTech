'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface UserProfileProps {
    className?: string;
}

export default function UserProfile({ className = '' }: UserProfileProps) {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === 'loading') {
        return <div className={`animate-pulse ${className}`}>Loading...</div>;
    }

    if (status === 'unauthenticated') {
        router.push('/login');
        return null;
    }

    if (!session?.user) {
        return null;
    }

    const handleSignOut = async () => {
        await signOut({
            callbackUrl: '/login',
            redirect: true,
        });
    };

    return (
        <div className={`flex items-center space-x-4 ${className}`}>
            <div className="flex items-center space-x-2">
                {session.user.avatar && (
                    <Image
                        src={session.user.avatar}
                        alt="User avatar"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                )}
                <span className="font-medium text-gray-700">
                    {session.user.name || session.user.email}
                </span>
            </div>
            <button
                onClick={handleSignOut}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
            >
                Sign out
            </button>
        </div>
    );
}
