import { useForm } from 'react-hook-form';

interface IFormInput {
    status: string;
    priority: string;
}

type Props = {
    onSearch?: (filters: IFormInput) => void;
};

export default function SearchTasks({ onSearch }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        defaultValues: {
            status: '',
            priority: '',
        },
        mode: 'onChange',
    });

    const onSubmit = (data: IFormInput) => {
        if (onSearch && typeof onSearch === 'function') {
            onSearch(data);
        }
    };

    return (
        <div className="mb-2 w-full max-w-6xl bg-white rounded-xl shadow p-6">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label htmlFor="status" className="block text-gray-700 font-medium mb-1">Status</label>
                        <select
                            {...register('status')}
                            id="status"
                            name="status"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="">All Statuses</option>
                            <option value="to_do">To Do</option>
                            <option value="in_progress">In Progress</option>
                            <option value="done">Done</option>
                        </select>
                        {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="priority" className="block text-gray-700 font-medium mb-1">Priority</label>
                        <select
                            {...register('priority')}
                            id="priority"
                            name="priority"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="">All Priorities</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                        {errors.priority && <p className="text-red-500 text-sm mt-1">{errors.priority.message}</p>}
                    </div>
                    <div className="flex items-end">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}