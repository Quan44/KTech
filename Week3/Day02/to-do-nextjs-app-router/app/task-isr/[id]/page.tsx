import React from 'react'
import { baseUrl, defaultHeaders } from '@/services/taskService';

export const revalidate = 30;

const getTasks = async (id: string) => {
    const response = await fetch(`${baseUrl}/workspaces/tasks/${id}`, {
        headers: defaultHeaders,
        next: { revalidate: 30 },
    });
    if (!response.ok) {
        throw new Error("Failed to fetch products")
    }
    return response.json()
}

async function TaskISR({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;
    const task = await getTasks(id);

    return (
        <div className="p-5 flex flex-col gap-5 min-h-screen bg-gray-50 items-center">
            <h1 className="text-3xl font-extrabold text-gray-800">Task List use ISR</h1>
            <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">ID</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Title</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Description</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Priority</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Start Date</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Due Date</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Assignee</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">

                        <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-2">{task.id}</td>
                            <td className="px-4 py-2">{task.title}</td>
                            <td className="px-4 py-2">{task.description}</td>
                            <td className="px-4 py-2">{task.status}</td>
                            <td className="px-4 py-2">{task.priority}</td>
                            <td className="px-4 py-2">{task.start_date ? new Date(task.start_date).toLocaleDateString() : ''}</td>
                            <td className="px-4 py-2">{task.due_date ? new Date(task.due_date).toLocaleDateString() : ''}</td>
                            <td className="px-4 py-2">{task.assignee_id}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TaskISR