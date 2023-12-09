import React, { useEffect, useState } from 'react'

import { setItem } from '../../core/storage/storage'
import { useUsers } from '../../context/User.Context'
import { useParams } from 'react-router-dom';

import DashboardLayout from '../../components/layout/dashboardLayout'
import InputForm from '../../components/common/inputForm'
import Alert from '../../components/alert/alert'
import SelectInput from '../../components/common/selectInput'
import IUserInterface from '../../core/interface/IUserInterface';

const EditUser = () => {
    const { users, setUsers } = useUsers();
    const [userName, setUserName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [position, setPosition] = useState<string>("")
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [age, setAge] = useState<number>(0)
    const [gender, setGender] = useState<boolean>(false)
    const [password, setPassword] = useState<string>("")
    const [userCreated, setUserCreated] = useState<boolean>(false)
    const { id } = useParams();

    const changeUser = () => {

        const updatedUser: IUserInterface = {
            username: userName,
            email: email,
            position: position,
            personalInfo: {
                age: age,
                first_name: firstName,
                last_name: lastName,
                gender: gender
            },

        };

        // Update users state
        const updatedUsers: IUserInterface = users.map((user: IUserInterface) => {
            if (user.id === id) {
                return updatedUser;
            }
            return user;
        });

        setUsers([...users, updatedUsers]);
        console.log(updatedUser)
        setItem("users", JSON.stringify(updatedUsers));

    }


    const cancelProccess = () => {
        setUserName("");
        setEmail("");
        setPosition("");
        setFirstName("");
        setLastName("");
        setAge(0);
        setGender(false);
        setPassword("");
    }

    useEffect(() => {
        const user: IUserInterface[] = users.filter((user: IUserInterface) => user.id === Number(id))
        setEmail(user[0].email)
        setUserName(user[0].username)
        setFirstName(user[0].personalInfo.first_name)
        setLastName(user[0].personalInfo.last_name)
        setGender(user[0].personalInfo.gender)
        setPosition(user[0].position)
        setAge(user[0].personalInfo.age)
    }, [])


    return (
        <DashboardLayout>
            <h1>Create User</h1>
            <main className="py-10 lg:pl-72 px-10 font-semibold">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                This information will be displayed publicly so be careful what you share.
                            </p>
                            {userCreated && <Alert message="User Information Changed Successfully" />}
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                {/* Username */}
                                <div className="sm:col-span-2">
                                    <InputForm label='Username' type={'text'} value={userName} onChange={(e) => setUserName(e.target.value)} className={''} />
                                </div>
                                {/* Email */}
                                <div className="sm:col-span-2">
                                    <InputForm label={'Email Address'} type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                {/* Position */}
                                <div className="sm:col-span-2">
                                    <InputForm label='Position' type={'text'} value={position} onChange={(e) => setPosition(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                {/* First Name */}
                                <div className="sm:col-span-3">
                                    <InputForm label={'First Name'} type={'text'} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                {/* Last Name */}
                                <div className="sm:col-span-3">
                                    <InputForm label={'Last Name'} type={'text'} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                {/* Age */}
                                <div className="sm:col-span-3">
                                    <InputForm label={'Age'} type={'number'} value={age} onChange={(e) => setAge(Number(e.target.value))} />
                                </div>
                                {/* Gender */}
                                <div className="sm:col-span-3">
                                    <SelectInput
                                        value={gender ? "male" : "female"}
                                        title={"Gender"}
                                        options={[{ title: "Male", value: "male" }, { title: "Female", value: "female" }]}
                                        onChange={(e) => setGender(e === "male")}
                                    />
                                </div>
                            </div>



                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-3">
                        <button onClick={cancelProccess} type="button" className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={changeUser}
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Change
                        </button>
                    </div>
                </div>
            </main>
        </DashboardLayout>)
}

export default EditUser