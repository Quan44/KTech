/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';

import { apiClient } from '../../lib/api-client';
import { useAuthStore } from '../../useAuthStore';
import { useNavigate } from 'react-router';

export default function Tasks() {
    const { logOut, access_token, refresh_token, changeAccessToken, changeRefreshToken, loggedInUser } = useAuthStore((state) => state);
    const [tasks, setTasks] = React.useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedInUser) {
            navigate('/login');
        }
    }, [loggedInUser, navigate])

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const tasks = (await apiClient.get('/workspaces/tasks',)) as any[];
                console.log(tasks);
                setTasks(tasks);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // React.useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const task = (await apiClient.get('/workspaces/tasks/49645')) as any;
    //             console.log(task);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);
    // React.useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const task = (await apiClient.get('/workspaces/tasks/49646')) as any;
    //             console.log(task);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    const handleChangeAccessToken = async () => {
        await changeAccessToken();
    };

    const handleChangeRefreshToken = async () => {
        await changeRefreshToken();
    };
    return (
        <div className='p-5 flex flex-col gap-5 min-h-screen bg-gray-50 items-center'>
            <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-2xl font-bold text-gray-800">Tasks</h1>

                <button
                    onClick={() => {
                        logOut();
                        navigate('/login');
                    }}
                    className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                    Logout
                </button>

                <div className="bg-gray-100 p-4 rounded">
                    <strong className="block text-sm text-gray-700">Access Token:</strong>
                    <span className="text-xs break-all text-gray-600">{access_token}</span>

                    <strong className="block text-sm text-gray-700 mt-2">Refresh Token:</strong>
                    <span className="text-xs break-all text-gray-600">{refresh_token}</span>
                </div>

                <div className="space-y-2">
                    <button
                        onClick={handleChangeAccessToken}
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    >
                        Change Access Token (Demo)
                    </button>

                    <button
                        onClick={handleChangeRefreshToken}
                        className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                    >
                        Change Refresh Token (Demo)
                    </button>
                </div>

                <hr className="border-t border-gray-300 mt-4" />
            </div>
            <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-8">
                <div className="mb-6">
                    <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Our tasks</h1>
                    <span className="text-gray-500 text-lg">Manage and track all our tasks</span>
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
                            {tasks.map((task: any) => (
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
    );
}