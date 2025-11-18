interface IPaginationIndexProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export const PaginationIndex = ({ totalItems, itemsPerPage, currentPage, onPageChange }: IPaginationIndexProps) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const activeClasses = "border-amber-800 text-white bg-amber-800";
    const inactiveClasses = "border-amber-300 text-amber-600 hover:text-white hover:bg-amber-800 hover:border-amber-800 focus:text-white focus:bg-amber-800 focus:border-amber-800 active:border-amber-800 active:text-white active:bg-amber-800";

    const handlePageClick = (pageNumber: number) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        onPageChange(pageNumber);
    };

    return (
        <>
            <div className="">
                <div className="row flex justify-center">
                    <button
                        className="rounded-md rounded-r-none border border-r-0 border-amber-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-amber-600 hover:text-white hover:bg-amber-800 hover:border-amber-800 focus:text-white focus:bg-amber-800 focus:border-amber-800 active:border-amber-800 active:text-white active:bg-amber-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        onClick={() => handlePageClick(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {pages.map((pageNumber) => (
                        <button
                            key={pageNumber}
                            className={`
                                rounded-md 
                                ${pageNumber === totalPages ? 'rounded-l-none' : 'rounded-r-none rounded-l-none border-r-0'} 
                                border py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
                                ${pageNumber === currentPage
                                    ? activeClasses
                                    : inactiveClasses
                                }
                            `}
                            type="button"
                            onClick={() => handlePageClick(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    ))}

                    <button
                        className="rounded-md rounded-l-none border border-amber-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-amber-600 hover:text-white hover:bg-amber-800 hover:border-amber-800 focus:text-white focus:bg-amber-800 focus:border-amber-800 active:border-amber-800 active:text-white active:bg-amber-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        onClick={() => handlePageClick(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};