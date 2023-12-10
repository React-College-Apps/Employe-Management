import React, { useState } from 'react'

import { setItem } from '../../core/storage/storage'
import { useUsers } from '../../context/User.Context'
import IUserInterface from '../../core/interface/IUserInterface'

import InputForm from '../../components/common/inputForm'
import SelectInput from '../../components/common/selectInput'
import DashboardLayout from '../../components/layout/dashboardLayout'
import Alert from '../../components/alert/alert'
import Button from '../../components/common/button'
const CreateUser = () => {
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

    const createUser = () => {
        const newUser = {
            id: users.length + 1,
            username: userName,
            email,
            position,
            isActive: true,
            password,
            isChecked: false,
            personalInfo: {
                first_name: firstName,
                last_name: lastName,
                age: age,
                gender: gender
            }
        };

        const updatedUsers = [...users, newUser];

        setUserCreated(true);
        setUsers(updatedUsers); // Update state with new users list
        setItem("users", JSON.stringify(updatedUsers)); // Save new users list to storage

        setTimeout(() => {
            setUserCreated(false);
        }, 3000);
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
                            {userCreated && <Alert message="User Created Successfully" />}
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

                            <div className="border-t border-gray-900/10 pt-12 mt-10">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Change Password</h2>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-2">
                                        <InputForm label='Password' type={'password'} className={''} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-3">
                        <Button onClick={cancelProccess}  className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400"
                        >
                            Cancel
                        </Button>

                        <Button
                            onClick={createUser}
                            className="rounded-md bg-[#0099CC] px-3 py-2 text-sm font-semibold text-white shadow-sm    "
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </main>
        </DashboardLayout>
    )
}

export default CreateUser