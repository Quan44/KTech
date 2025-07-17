import { authOptions } from "@/lib/auth";
import { Task } from "@/types";
import { getServerSession } from "next-auth";
import UserProfile from "./UserProfile";
import Link from "next/link";

const TaskServer = async () => {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full mx-4">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Task Management</h1>
                    <p className="text-gray-600 mb-6">Please log in to access your tasks</p>
                    <Link href="/login">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
    //Gọi API trong server component
    const response = await fetch('https://server.aptech.io/workspaces/tasks', {
        headers: {
            'Authorization': `Bearer ${session.user.accessToken}`,
        },
    });
    if (!response.ok) {
        return 'Error fetching profile data';
    }
    const tasks = await response.json();
    // console.log('data tasks', tasks);

    return (
        <div className="p-5 flex flex-col gap-5 min-h-screen bg-gray-50 items-center">
            <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-8">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Our tasks</h1>
                        <span className="text-gray-500 text-lg">Manage and track all our tasks</span>
                    </div>
                    <UserProfile />
                </div>
                <div className="mt-6 overflow-x-auto rounded-lg shadow">
                    <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Title</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Description</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Priority</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Start Date</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Due Date</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Assignee</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {tasks.map((task: Task) => (
                                <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-2">{task.title}</td>
                                    <td className="px-4 py-2">{task.description}</td>
                                    <td className="px-4 py-2">{task.status}</td>
                                    <td className="px-4 py-2">{task.priority}</td>
                                    <td className="px-4 py-2">{task.start_date ? new Date(task.start_date).toLocaleDateString() : ''}</td>
                                    <td className="px-4 py-2">{task.due_date ? new Date(task.due_date).toLocaleDateString() : ''}</td>
                                    <td className="px-4 py-2">{task.assignee_id}</td>
                                    <td className="px-4 py-2">
                                        <div className="flex gap-2">
                                            <button
                                                // onClick={() => handleOnEdit(task?.id as any)}
                                                className="bg-blue-600 hover:bg-blue-800 text-white font-medium rounded px-2 py-1 transition"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                // onClick={() => handleOnDelete(task?.id as any)}
                                                className="bg-red-600 hover:bg-red-800 text-white font-medium rounded px-2 py-1 transition"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TaskServer