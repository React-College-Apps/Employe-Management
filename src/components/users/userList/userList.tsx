import React from 'react';

import IUserInterface from '../../../core/interface/IUserInterface';
import tableCol from '../../../constant/tableCol'

import UserTableProps from '../../../core/types/UserTable.type';
import { Link } from 'react-router-dom';
import Button from '../../common/button';


const UserList: React.FC<UserTableProps> = ({ users, allChecked, onCheckAll, onCheck, deleteUser }) => {
    return (
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full table-fixed divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                                <input
                                    type="checkbox"
                                    checked={allChecked}
                                    onChange={onCheckAll}
                                    className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                            </th>
                            {tableCol.map((item: string, index: any) => (
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
                            <tr key={user.id}>

                                <td className="relative px-7 sm:w-12 sm:px-6">
                                    <input
                                        type="checkbox"
                                        checked={user.isChecked}
                                        onChange={() => onCheck(user.id)}
                                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </td>
                                <Link to={`/edituser/${user.id}`}>
                                    <td className=" whitespace-nowrap py-4 p-3 text-sm font-medium text-gray-900">
                                        {user.username}
                                    </td>
                                </Link>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {user.position}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {user.email}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {user.personalInfo?.gender ? "🙎🏻‍♂️Male" : "🙎🏻‍♀️Female"}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {user.personalInfo.age}
                                </td>
                                <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                                    <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                                        {user.isActive ? <>
                                            <div className="flex-none rounded-full ml-2 p-1 text-green-400 bg-green-400/10">
                                                <div className="h-1.5 w-1.5 rounded-full bg-current"></div>
                                            </div>
                                            <div className="hidden text-black sm:block">Active</div></> : <>
                                            <div className="flex-none rounded-full ml-2 p-1 text-rose-400 bg-rose-400/10">
                                                <div className="h-1.5 w-1.5 rounded-full bg-current"></div>
                                            </div>
                                            <div className="hidden text-black sm:block">Error</div>
                                        </>}
                                    </div>
                                </td>
                                <td className="whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-3 space-x-3">
                                    <Link
                                        to={`/edituser/${user.id}`}
                                        className="rounded bg-[#0099CC] text-white px-2 py-1 text-md hover:text-white"
                                    >
                                        Edit
                                    </Link>
                                    <Button onClick={() => deleteUser(user.id)} className="rounded bg-red-600 px-2 py-1  text-md font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Delete</Button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList