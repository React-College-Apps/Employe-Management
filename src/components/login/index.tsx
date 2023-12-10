import React, { useState } from 'react'

import logo from '../../assets/images/logo/logo.png'

import LoginForm from './loginForm/LoginForm'

import { useNavigate } from 'react-router-dom'
import { setItem } from '../../core/storage/storage'
import Alert from '../alert/alert'
import { useUsers } from '../../context/User.Context'

const LoginHolder = () => {
    const { users } = useUsers()
    const [userName, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [success, setSuccess] = useState<boolean | null>(null) // Set to actual null, not "null"
    const navigate = useNavigate()

    const login = () => {
        const userExist = users.filter(user =>
            (user.username === userName || user.email === userName) && user.password === password);
        console.log(userExist)
        if (userExist.length > 0) {
            setItem("user", JSON.stringify(userExist[0]));
            setSuccess(true);
            setTimeout(() => {
                navigate('/dashboard');
            }, 3000);
        } else {
            setSuccess(false);
        }
    }

    return (
        <div className="flex  flex-col justify-center items-center h-full py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-10 w-auto"
                    src={logo}
                    alt="Your Company"
                />
                <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign In To Quera Employe Management
                </h2>
            </div>
            {success === true && <Alert message={'Login Successful'} />}
            {success === false && <Alert error={true} errorMessage="Username Or Password Is Invalid" />}
            <LoginForm setUsername={setUserName} setPassword={setPassword} onClick={login} />

        </div>
    )
}

export default LoginHolder