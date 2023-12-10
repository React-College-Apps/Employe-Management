import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import IUserInterface from '../../core/interface/IUserInterface'

import DashboardLayout from '../../components/layout/dashboardLayout'
import SortingOptions from '../../components/users/sortingOption/sortingOption'
import UserTable from '../../components/users/userList/userList'
import Pagination from '../../components/pagination/pagination'
import Modal from '../../components/modal/modal'
import Alert from '../../components/alert/alert'

import UserJson from '../../constant/users.json'
import { setItem } from '../../core/storage/storage'
import { useUsers } from '../../context/User.Context'
import SelectInput from '../../components/common/selectInput'
import Button from '../../components/common/button'
import Actions from '../../components/users/actions/actions'


const Users = () => {
    const usersWithCheckbox = UserJson.map((user: IUserInterface) => ({
        ...user,
        isChecked: false
    }));

    const { users, setUsers } = useUsers();

    const [allChecked, setAllChecked] = useState<boolean>(false);
    const [sortByName, setSortByName] = useState<string>('');
    const [sortByGender, setSortByGender] = useState<string>('');
    const [sortByPosition, setSortByPosition] = useState<string>('');
    const [sortByStatus, setSortByStatus] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState<number>(10);
    const [currentUsers, setCurrentUsers] = useState<IUserInterface[]>([])
    const [deleteModel, setDeleteModel] = useState<boolean>(false)
    const [selectedUser, setSelectedUser] = useState<number[]>([0])
    const [showAlert, setShowAlert] = useState(false);
    const [sortByAge, setSortByAge] = useState<any>(null)
    const [userAction, setUserAction] = useState<string>("")

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const totalPages = Math.ceil(users.length / itemsPerPage);

    const actionOptions = [{
        title: "Delete User", value: "del"
    },
    {
        title: "Deactive User", value: "dea"
    },
    {
        title: "Active User", value: "act"
    }]

    const toggleAllCheckboxes = () => {
        const updatedUsers = users.map(user => ({ ...user, isChecked: !allChecked }));
        const userIds: any = updatedUsers.map((user: IUserInterface) => user.id)
        setSelectedUser(userIds)
        setUsers(updatedUsers);
        setAllChecked(!allChecked);
    };

    const toggleCheckbox = (id: number) => {
        const updatedUsers: IUserInterface[] = users.map(user =>
            user.id === id ? { ...user, isChecked: !user.isChecked } : user
        );

        const newSelectedUser = updatedUsers.find(user => user.id === id);
        if (newSelectedUser && newSelectedUser.isChecked) {
            setSelectedUser(prevSelected => [...prevSelected, id]);
        } else {
            setSelectedUser(prevSelected => prevSelected.filter(selectedId => selectedId !== id));
        }

        setUsers(updatedUsers);
    };


    const sortByNameHandler = (input: string) => {
        setSortByName(input)
        const sortedUsers = [...users];
        sortedUsers.sort((a, b) =>
            input === "asc" ? a.username.localeCompare(b.username) : b.username.localeCompare(a.username)
        );
        setUsers(sortedUsers);
    };


    const sortByPositionHandler = (input: string) => {
        setSortByPosition(input)
        const sortedUsers = [...users];
        sortedUsers.sort((a, b) =>
            input === "asc" ? a.position.localeCompare(b.position) : b.position.localeCompare(a.position)
        );
        setUsers(sortedUsers);
    };

    const sortByStatusHandler = (input: string) => {

        setSortByStatus(input);
        const sortedUsers = [...users];
        sortedUsers.sort((a, b) => {
            if (input === "active") {
                return (a.isActive === b.isActive) ? 0 : a.isActive ? -1 : 1;
            } else {
                return (a.isActive === b.isActive) ? 0 : a.isActive ? 1 : -1;
            }
        });
        setUsers(sortedUsers);
    };




    const setSortByGenderHandler = (input: string) => {
        setSortByGender(input);
        const sortedUsers = [...users];
        sortedUsers.sort((a, b) => {
            if (input === "male") {
                return (a.personalInfo.gender === b.personalInfo.gender) ? 0 : a.personalInfo.gender ? -1 : 1;
            } else {
                return (a.personalInfo.gender === b.personalInfo.gender) ? 0 : a.personalInfo.gender ? 1 : -1;
            }
        });
        setUsers(sortedUsers);
    };

    const searchInTableHandler = (value: string) => {
        if (!value) {
            setUsers(usersWithCheckbox);
        } else {
            const filteredUsers = users.filter(user =>
                user.username.toLowerCase().includes(value.toLowerCase()) ||
                user.position.toLowerCase().includes(value.toLowerCase()) ||
                user.email.toLowerCase().includes(value.toLowerCase())
            );
            setCurrentUsers(filteredUsers);
        }
    };
    const deleteUserHandler = () => {
        const newUser: IUserInterface[] = users.filter(user => user.id !== undefined && !selectedUser.includes(user.id));
        console.log(newUser)
        setItem("users", JSON.stringify(newUser));
        setUsers(newUser);
        setShowAlert(true);
        setDeleteModel(false);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };


    const selectUserToDelete = (id: number) => {
        setSelectedUser([id])
        setDeleteModel(true)
    }

    const resetDataHandler = () => {
        setUsers(usersWithCheckbox)
        setItem("users", JSON.stringify(usersWithCheckbox))
    }

    const setSortByAgeHandler = (input: string) => {
        setSortByAge(input);
        const sortedUsers = [...users];
        sortedUsers.sort((a, b) => {
            const ageA = a.personalInfo?.age || 0;
            const ageB = b.personalInfo?.age || 0;

            if (input === "asc") {
                return ageA - ageB;
            } else {
                return ageB - ageA;
            }
        });
        setUsers(sortedUsers);
    };

    const deactiveUsersHandler = () => {
        const updatedUsers = users.map(user => {
            if (selectedUser.includes(user.id!)) {
                return { ...user, isActive: false };
            }
            return user;
        });
        setUsers(updatedUsers);
        setItem("users", JSON.stringify(updatedUsers));
    };

    const activeUsersHandler = () => {
        const updatedUsers = users.map(user => {
            if (selectedUser.includes(user.id!)) {
                return { ...user, isActive: true };
            }
            return user;
        });
        setUsers(updatedUsers);
        setItem("users", JSON.stringify(updatedUsers));
    };

    const actionHandler = () => {
        switch (userAction) {
            case "del":
                deleteUserHandler()
                break;
            case "dea":
                deactiveUsersHandler()
                break
            case "act":
                activeUsersHandler()
                break

        }
    }
    useEffect(() => {
        setCurrentUsers(users.slice(indexOfFirstItem, indexOfLastItem));
    }, [users, currentPage, itemsPerPage]);



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
                            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex space-x-3">
                                <Link
                                    className="block rounded-md bg-[#0099CC] px-3 py-2 text-center text-md font-semibold text-white shadow-sm   "
                                    to={'/createuser'}
                                >

                                    Add user
                                </Link>
                                <Button className=" bg-yellow-500 hover:bg-yellow-400 px-3 py-2" onClick={resetDataHandler}>
                                    Reset Data
                                </Button>
                            </div>
                        </div>
                        <div className="mt-8 flow-root">
                            <h2>Filter</h2>
                            {showAlert && (
                                <Alert message="User deleted successfully" /> // You can customize the message as needed
                            )}
                            <SortingOptions
                                sortByStatus={sortByStatus}
                                sortByName={sortByName}
                                sortByPosition={sortByPosition}
                                setSortByName={sortByNameHandler}
                                setSortByPosition={sortByPositionHandler}
                                setSortByStatus={sortByStatusHandler}
                                setSortByGender={setSortByGenderHandler}
                                sortByGender={sortByGender}
                                onSearchChange={searchInTableHandler}
                                sortByAge={sortByAge}
                                setSortByAge={setSortByAgeHandler} />
                            <Actions setUserAction={setUserAction} actionHandler={actionHandler} actionOptions={actionOptions} />

                            <UserTable
                                users={currentUsers}
                                allChecked={allChecked}
                                onCheckAll={toggleAllCheckboxes}
                                onCheck={toggleCheckbox}
                                deleteUser={selectUserToDelete}
                            />
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                setCurrentPage={setCurrentPage}
                            />
                            {deleteModel && <Modal deleteUser={deleteUserHandler} cancel={() => setDeleteModel(false)} />}
                        </div>
                    </div>
                </div>
            </main>
        </DashboardLayout>
    )
}



export default Users