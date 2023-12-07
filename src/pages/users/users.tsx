import { useState } from 'react'

import IUserInterface from '../../core/interface/IUserInterface'

import DashboardLayout from '../../components/layout/dashboardLayout'


import UserJson from '../../constant/users.json'
import SortingOptions from '../../components/users/sortingOption/sortingOption'
import UserTable from '../../components/users/userList/userList'
import Pagination from '../../components/pagination/pagination'

const Users = () => {
    const usersWithCheckbox = UserJson.map(user => ({
        ...user,
        isChecked: false
    }));

    const [users, setUsers] = useState<IUserInterface[]>(usersWithCheckbox);
    const [allChecked, setAllChecked] = useState<boolean>(false);
    const [sortByName, setSortByName] = useState<string>('');
    const [sortByTitle, setSortByTitle] = useState<string>('');
    const [sortByStatus, setSortByStatus] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState<number>(10);

    const toggleAllCheckboxes = () => {
        const updatedUsers = users.map(user => ({ ...user, isChecked: !allChecked }));
        setUsers(updatedUsers);
        setAllChecked(!allChecked);
    };

    const toggleCheckbox = (id: number) => {
        const updatedUsers = users.map(user => user.id === id ? { ...user, isChecked: !user.isChecked } : user);
        setUsers(updatedUsers);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(users.length / itemsPerPage);


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
                                sortByStatus={sortByStatus} onSortChange={function (key: 'name' | 'title' | 'status', value: string): void {
                                    throw new Error('Function not implemented.')
                                } }                                />
                            <UserTable
                                users={currentUsers}
                                allChecked={allChecked}
                                onCheckAll={toggleAllCheckboxes}
                                onCheck={toggleCheckbox}
                            />
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                setCurrentPage={setCurrentPage}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </DashboardLayout>
    )
}



export default Users