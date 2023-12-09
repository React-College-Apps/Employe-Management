import React from 'react';

interface IPaginationProps {
    currentPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<IPaginationProps> = ({ currentPage, totalPages, setCurrentPage }) => {
    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (page: any) => {
        setCurrentPage(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <a
                    key={i}
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        handlePageClick(i);
                    }}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === i ? 'text-white bg-[#0099CC]' : 'text-gray-900 ring-1 ring-inset ring-gray-300'}  `}
                >
                    {i}
                </a>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">

            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{(currentPage - 1) * 10 + 1}</span> to <span className="font-medium">{currentPage * 10}</span> of{' '}
                        <span className="font-medium">{totalPages * 10}</span> results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handlePrevClick();
                            }}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            Prev
                        </a>
                        {renderPageNumbers()}
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNextClick();
                            }}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            Next
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
