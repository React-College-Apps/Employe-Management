interface ISortingOptionsProps  {
    sortByName: string;
    sortByTitle: string;
    onSortChange: (key: 'name' | 'title', value: string) => void;
};

const SortingOptions: React.FC<ISortingOptionsProps> = ({ sortByName, sortByTitle, onSortChange }) => {
    return (
        <div className='grid grid-cols-3 mb-3 w-1/2 gap-3'>
            <div>
                <label htmlFor="sortByName" className="block text-sm font-medium leading-6 text-gray-900">Sort By Name</label>
                <select
                    value={sortByName}
                    onChange={(e) => onSortChange('name', e.target.value)}
                    id="sortByName"
                    name="name"
                    className="outline-none mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                    <option value=''>Select Option</option>
                    <option value="asc">Name (A to Z)</option>
                    <option value="desc">Name (Z to A)</option>
                </select>
            </div>
            <div>
                <label htmlFor="sortByTitle" className="block text-sm font-medium leading-6 text-gray-900">Sort By Title</label>
                <select
                    value={sortByTitle}
                    onChange={(e) => onSortChange('title', e.target.value)}
                    id="sortByTitle"
                    name="title"
                    className="outline-none mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                    <option value=''>Select Option</option>
                    <option value="asc">Title (A to Z)</option>
                    <option value="desc">Title (Z to A)</option>
                </select>
            </div>
        </div>
    );
};


export default SortingOptions