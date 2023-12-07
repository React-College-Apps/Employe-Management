import { useState } from 'react'

import IUserInterface from '../../core/interface/IUserInterface'

import DashboardLayout from '../../components/layout/dashboardLayout'


import UserJson from '../../constant/users.json'
import SortingOptions from '../../components/users/sortingOption/sortingOption'
import UserTable from '../../components/users/userList/userList'

const Users = () => {
    const usersWithCheckbox = UserJson.map(user => ({
        ...user,
        isChecked: false
    }));

    const [users, setUsers] = useState<IUserInterface[]>(usersWithCheckbox);
    const [allChecked, setAllChecked] = useState<boolean>(false);
    const [sortByName, setSortByName] = useState('');
    const [sortByTitle, setSortByTitle] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const toggleAllCheckboxes = () => {
        const updatedUsers = users.map(user => ({ ...user, isChecked: !allChecked }));
        setUsers(updatedUsers);
        setAllChecked(!allChecked);
    };

    const toggleCheckbox = (id: number) => {
        const updatedUsers = users.map(user => user.id === id ? { ...user, isChecked: !user.isChecked } : user);
        setUsers(updatedUsers);
    };

    const handleSortChange = (key: 'name' | 'title', value: string) => {
        if (key === 'name') {
            setSortByName(value);
            setSortByTitle('');
        } else {
            setSortByTitle(value);
            setSortByName('');
        }
    };

    const compareUsers = (a: IUserInterface, b: IUserInterface, key: 'name' | 'position', order: string) => {
        return order === 'asc' ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]);
    };

    const getSortedUsers = () => {
        return [...currentItems].sort((a, b) => {
            if (sortByName) return compareUsers(a, b, 'name', sortByName);
            if (sortByTitle) return compareUsers(a, b, 'position', sortByTitle);
            return 0;
        });
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(users.length / itemsPerPage);

    const renderPagination = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers.map(number => (
            <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${currentPage === number ? 'bg-[#0099CC] text-white' : ''}`}
            >
                {number}
            </button>
        ));
    };

    return (
        <DashboardLayout>
            <h1>Users</h1>
            <main className="py-10 lg:pl-72 font-semibold">
                <div className="px-4 sm:px-6 lg:px-8">
                    <h1 className='text-red text-3xl'>Users</h1>
                    <div className="">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <p className="mt-2 text-sm text-gray-700">
                                    A list of all the Quera Employes That Work In Quera Or Juniora
                                </p>
                            </div>
                            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                                <button
                                    type="button"
                                    className="block rounded-md bg-[#0099CC] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm   "
                                >
                                    Add user
                                </button>
                            </div>
                        </div>
                        <div className="mt-8 flow-root">
                            <SortingOptions
                                sortByName={sortByName}
                                sortByTitle={sortByTitle}
                                onSortChange={handleSortChange}
                            />
                            <UserTable
                                users={getSortedUsers()}
                                allChecked={allChecked}
                                onCheckAll={toggleAllCheckboxes}
                                onCheck={toggleCheckbox}
                            />
                            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to <span className="font-medium">{indexOfLastItem}</span> of{' '}
                                            <span className="font-medium">{users.length}</span> results
                                        </p>
                                    </div>
                                    <div>
                                        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                            {renderPagination()}
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </DashboardLayout>
    )
}



export default Users