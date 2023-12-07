import { useState, useId } from 'react'

import IUserInterface from '../../core/interface/IUserInterface'

import DashboardLayout from '../../components/layout/dashboardLayout'

import tableCol from '../../constant/tableCol'


const Users = () => {
    const [users, setUsers] = useState<IUserInterface[]>([
        {
            id: useId(),
            name: "salar",
            email: "salar.nili097@gmail.com",
            isActive: true,
            role: "admin",
            isChecked: true,
            position: "Frontend Developer"
        },
        {
            id: useId(),
            name: "salar",
            email: "salar.nili097@gmail.com",
            isActive: true,
            role: "admin",
            isChecked: true,
            position: "Frontend Developer"
        }, {
            id: useId(),
            name: "salar",
            email: "salar.nili097@gmail.com",
            isActive: true,
            role: "admin",
            isChecked: true,
            position: "Frontend Developer"
        },
    ])
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
                                    A list of all the users in your account including their name, title,
                                    email and role.
                                </p>
                            </div>
                            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                                <button
                                    type="button"
                                    className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Add user
                                </button>
                            </div>
                        </div>
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <div className="relative">
                                        <table className="min-w-full table-fixed divide-y divide-gray-300">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                                                        <input
                                                            type="checkbox"
                                                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                        />
                                                    </th>
                                                    {tableCol.map((item, index) => (
                                                        <th
                                                            key={index}
                                                            scope="col"
                                                            className="min-w-[12rem] px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                        >
                                                            {item}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                                {users.map((user: IUserInterface) => (
                                                    <tr  key={user.id}>
                                                        <td className="relative px-7 sm:w-12 sm:px-6">
                                                            <input
                                                                type="checkbox"
                                                                value={user.isChecked}
                                                                className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                            />
                                                        </td>
                                                        <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900">
                                                            {user.name}
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                            {user.position}
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                            {user.email}
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                            {user.role}
                                                        </td>
                                                        <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                                                            <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                                                                {user.isActive ? <>
                                                                    <div className="flex-none rounded-full ml-2 p-1 text-green-400 bg-green-400/10">
                                                                        <div className="h-1.5 w-1.5 rounded-full bg-current"></div>
                                                                    </div>
                                                                    <div className="hidden text-black sm:block">Active</div></> : <>
                                                                    <div className="flex-none rounded-full p-1 text-rose-400 bg-rose-400/10">
                                                                        <div className="h-1.5 w-1.5 rounded-full bg-current"></div>
                                                                    </div>
                                                                    <div className="hidden text-black sm:block">Error</div>
                                                                </>}
                                                            </div>
                                                        </td>
                                                        <td className="whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-3">
                                                            <a
                                                                href="#"
                                                                className="text-indigo-600 hover:text-indigo-900"
                                                            >
                                                                Edit
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
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