type Props = {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange, pageSize }: Props) {
    const totalPage = Math.ceil(totalPages / pageSize);
    if (totalPages <= 1) return null;
    
    return (
        <div className="flex justify-center items-center gap-2">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded border transition-colors duration-150
                    ${currentPage === 1
                        ? 'bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed'
                        : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-100 hover:text-blue-700'}
                    focus:outline-none focus:ring-2 focus:ring-blue-300`
                }
            >
                Back
            </button>
            {Array.from({ length: totalPage }, (_, index) => {
                const isActive = currentPage === index + 1;
                return (
                    <button
                        key={index}
                        onClick={() => onPageChange(index + 1)}
                        disabled={isActive}
                        className={`px-3 py-1 rounded border transition-colors duration-150
                            ${isActive
                                ? 'bg-blue-500 text-white border-blue-500 cursor-default'
                                : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-100 hover:text-blue-700'}
                            focus:outline-none focus:ring-2 focus:ring-blue-300`
                        }
                    >
                        {index + 1}
                    </button>
                );
            })}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPage}
                className={`px-3 py-1 rounded border transition-colors duration-150
                    ${currentPage === totalPage
                        ? 'bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed'
                        : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-100 hover:text-blue-700'}
                    focus:outline-none focus:ring-2 focus:ring-blue-300`
                }
            >
                Next
            </button>
        </div>
    )
}