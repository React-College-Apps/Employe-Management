import React from 'react'

import InputForm from '../../common/inputForm'

interface ILoginFormProps {
    setUsername: (value: any) => any,
    setPassword: (value: any) => any,
    onClick: () => any
}
const LoginForm: React.FC<ILoginFormProps> = ({ setPassword, setUsername, onClick }) => {
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                <div className="space-y-6" >
                    <InputForm onChange={(e) => setUsername(e.target.value)} label={'Username'} type={'text'} className={''} />
                    <InputForm onChange={(e) => setPassword(e.target.value)} label={'password'} type={'password'} className={''} />
                    <button
                        onClick={onClick}
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-[#0099CC] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign in
                    </button>
                </div>
                <div>


                </div>
            </div>

        </div>
    )
}

export default LoginForm