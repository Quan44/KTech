import { useContext, useEffect, useState } from 'react';
import AuthContext from '@/context';
import { getTasksByAssignee } from '@/services';
import type { Task } from '@/types';
import SearchTasks from '@/components/SearchTask';
import { useNavigate } from 'react-router';

export default function AssigneeMePage() {
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const [tasks, setTasks] = useState([]);

    const [filters, setFilters] = useState<any>({
        status: '',
        priority: '',
    });

    useEffect(() => {
        const fetchTasks = async () => {
            if (!user) return;
            try {
                const tasks = await getTasksByAssignee(user.id);
                setTasks(tasks);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, [user]);

    const handleOnEdit = (taskId: number) => {
        // Logic to handle task edit
        navigate(`/update-task/${taskId}`);
    };

    const handleOnSearch = (filters: { status?: string; priority?: string }) => {
        // Logic to filter tasks based on status and priority
        console.log('Filters applied:', filters);
        // You can implement the filtering logic here or pass it to a service function
        setFilters(filters);
    };

    const filteredTasks = tasks.filter((task: Task) => {
        let matches = true;

        if (filters.status && task.status !== filters.status) {
            matches = false;
        }

        if (filters.priority && task.priority !== filters.priority) {
            matches = false;
        }

        return matches;
    });

    return (
        <div className="p-5 flex flex-col gap-5 min-h-screen bg-gray-50 items-center">
            <SearchTasks onSearch={handleOnSearch} />
            <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-8">
                <div className="mb-6">
                    <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Your tasks</h1>
                    <span className="text-gray-500 text-lg">Manage and track all your tasks</span>
                </div>
                <div className="mt-6 overflow-x-auto rounded-lg shadow">
                    <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">ID</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Title</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Description</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Priority</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Due Date</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Assignee</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredTasks.map((task: Task) => (
                                <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-2">{task.id}</td>
                                    <td className="px-4 py-2">{task.title}</td>
                                    <td className="px-4 py-2">{task.description}</td>
                                    <td className="px-4 py-2">{task.status}</td>
                                    <td className="px-4 py-2">{task.priority}</td>
                                    <td className="px-4 py-2">{task.due_date ? new Date(task.due_date).toLocaleDateString() : ''}</td>
                                    <td className="px-4 py-2">{task.assignee_id}</td>
                                    <td className="px-4 py-2">
                                        <button onClick={() => handleOnEdit(task?.id as any)} className="text-blue-600 hover:text-blue-800 font-medium rounded px-2 py-1 transition">Edit</button>
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