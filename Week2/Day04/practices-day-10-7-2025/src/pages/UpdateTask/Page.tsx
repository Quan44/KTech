import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { getTaskById, updateTask } from '@/services';
import { useNavigate, useParams, useSearchParams } from 'react-router';
import { useEffect } from 'react';

interface IFormInput {
    title: string;
    start_date: string;
    due_date?: string;
    description?: string;
    status: 'to_do' | 'in_progress' | 'done';
    priority: 'low' | 'medium' | 'high';
    assignee_id?: number;
}

// Yup validation schema
const schema: yup.ObjectSchema<IFormInput> = yup.object({
    title: yup
        .string()
        .required('Title is required')
        .min(3, 'Title must be at least 3 characters')
        .max(100, 'Title must be less than 100 characters'),
    start_date: yup
        .string()
        .required('Start date is required')
        .matches(/^\d{4}-\d{2}-\d{2}$/, 'Please enter a valid date'),
    due_date: yup
        .string()
        .optional()
        .matches(/^\d{4}-\d{2}-\d{2}$/, 'Please enter a valid date')
        .test('due_date-after-start_date', 'Due date must be after start date', function (value) {
            if (!value) return true;
            const { start_date } = this.parent;
            return new Date(value) >= new Date(start_date);
        }),
    description: yup.string().optional().max(500, 'Description must be less than 500 characters'),
    status: yup
        .mixed<'to_do' | 'in_progress' | 'done'>()
        .required('Status is required')
        .oneOf(['to_do', 'in_progress', 'done'], 'Please select a valid status'),
    priority: yup
        .mixed<'low' | 'medium' | 'high'>()
        .required('Priority is required')
        .oneOf(['low', 'medium', 'high'], 'Please select a valid priority'),
    assignee_id: yup
        .number()
        .min(1, 'Assignee ID must be a positive number')
        .test('assignee_id', 'Assignee ID cannot be empty if provided', (value) => {
            if (!value) return true;
            return !isNaN(Number(value)) && Number(value) >= 1;
        }),
}).required();

export default function UpdateTaskPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const fromPage = searchParams.get('from');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(schema),
        defaultValues: {
            title: '',
            start_date: '',
            due_date: '',
            description: '',
            status: 'to_do',
            priority: 'medium',
            assignee_id: undefined,
        },
        mode: 'onChange',
    });

    useEffect(() => {
        const fetchTask = async () => {
            try {
                // Assuming getTask is a function that fetches a task by ID
                const task = await getTaskById(id ? parseInt(id) : 0);

                // Set default values for the form
                reset({
                    title: task.title,
                    start_date: task.start_date ? task.start_date.split('T')[0] : '', // Format date to YYYY-MM-DD
                    due_date: task.due_date ? task.due_date.split('T')[0] : '', // Format date to YYYY-MM-DD
                    description: task.description,
                    status: task.status,
                    priority: task.priority,
                    assignee_id: task.assignee_id ? task.assignee_id.toString() : '', // Convert to string if needed
                });
            } catch (error) {
                console.error('Error fetching task:', error);
            }
        };

        fetchTask();
    }, [id, reset]);

    const onSubmit: SubmitHandler<IFormInput> = async (data: any) => {
        try {
            await updateTask(id ? parseInt(id) : 0, data);
            // Navigate back to the appropriate page based on where user came from
            if (fromPage === 'assignee-me') {
                navigate('/assignee-me');
            } else {
                navigate('/tasks');
            }
        } catch (error) {
            console.error('Error creating task:', error);
            alert('Failed to update task. Please try again.');
        }
    };

    return (
        <div className="p-5 min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Update Task</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Title */}
                    <div>
                        <label htmlFor="title" className="block text-gray-800 font-semibold mb-1">
                            Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            {...register('title')}
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter task title"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                    </div>

                    {/* Grid for Start Date, Due Date, Status, Priority */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="start_date" className="block text-gray-800 font-semibold mb-1">
                                Start Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register('start_date')}
                                type="date"
                                id="start_date"
                                name="start_date"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            {errors.start_date && <p className="text-red-500 text-sm mt-1">{errors.start_date.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="due_date" className="block text-gray-800 font-semibold mb-1">
                                Due Date
                            </label>
                            <input
                                {...register('due_date')}
                                type="date"
                                id="due_date"
                                name="due_date"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            {errors.due_date && <p className="text-red-500 text-sm mt-1">{errors.due_date.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="status" className="block text-gray-800 font-semibold mb-1">
                                Status <span className="text-red-500">*</span>
                            </label>
                            <select
                                {...register('status')}
                                id="status"
                                name="status"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                <option value="to_do">To Do</option>
                                <option value="in_progress">In Progress</option>
                                <option value="done">Done</option>
                            </select>
                            {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="priority" className="block text-gray-800 font-semibold mb-1">
                                Priority <span className="text-red-500">*</span>
                            </label>
                            <select
                                {...register('priority')}
                                id="priority"
                                name="priority"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                            {errors.priority && <p className="text-red-500 text-sm mt-1">{errors.priority.message}</p>}
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-gray-800 font-semibold mb-1">
                            Description
                        </label>
                        <textarea
                            {...register('description')}
                            id="description"
                            name="description"
                            placeholder="Enter task description (optional)"
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                        />
                        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
                    </div>

                    {/* Assignee ID */}
                    <div>
                        <label htmlFor="assignee_id" className="block text-gray-800 font-semibold mb-1">
                            Assignee ID
                        </label>
                        <input
                            {...register('assignee_id')}
                            type="text"
                            id="assignee_id"
                            name="assignee_id"
                            placeholder="Enter assignee ID (optional)"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.assignee_id && <p className="text-red-500 text-sm mt-1">{errors.assignee_id.message}</p>}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4 mt-8">
                        <button
                            type="reset"
                            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Update Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}