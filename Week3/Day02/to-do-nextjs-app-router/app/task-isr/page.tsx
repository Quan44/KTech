import { Task } from '@/types/task'
import React from 'react'
import { baseUrl, defaultHeaders } from '@/services/taskService';
import Link from 'next/link';
export const dynamic = "force-static";

export const revalidate = 30;

async function TaskISR() {
    const getTasks = async () => {
        const response = await fetch(`${baseUrl}/workspaces/tasks`, {
            headers: defaultHeaders,
            next: { revalidate: 30 },
        });
        if (!response.ok) {
            throw new Error("Failed to fetch products")
        }
        return response.json()
    }

    const tasks = await getTasks();

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
                        {tasks.map((task: Task) => (
                            <tr key={task.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
                                <td className="px-4 py-2">
                                    <Link href={`/task-isr/${task.id}`} className="block">
                                        {task.id}
                                    </Link>
                                </td>
                                <td className="px-4 py-2">
                                    <Link href={`/task-isr/${task.id}`} className="block">
                                        {task.title}
                                    </Link>
                                </td>
                                <td className="px-4 py-2">
                                    <Link href={`/task-isr/${task.id}`} className="block">
                                        {task.description}
                                    </Link>
                                </td>
                                <td className="px-4 py-2">
                                    <Link href={`/task-isr/${task.id}`} className="block">
                                        {task.status}
                                    </Link>
                                </td>
                                <td className="px-4 py-2">
                                    <Link href={`/task-isr/${task.id}`} className="block">
                                        {task.priority}
                                    </Link>
                                </td>
                                <td className="px-4 py-2">
                                    <Link href={`/task-isr/${task.id}`} className="block">
                                        {task.start_date ? new Date(task.start_date).toLocaleDateString() : ''}
                                    </Link>
                                </td>
                                <td className="px-4 py-2">
                                    <Link href={`/task-isr/${task.id}`} className="block">
                                        {task.due_date ? new Date(task.due_date).toLocaleDateString() : ''}
                                    </Link>
                                </td>
                                <td className="px-4 py-2">
                                    <Link href={`/task-isr/${task.id}`} className="block">
                                        {task.assignee_id}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TaskISR