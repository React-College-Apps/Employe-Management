import React from 'react'
import InputForm from '../../common/inputForm'

const LoginForm = () => {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <form className="space-y-6" >
            <InputForm label={'Username'} type={'text'} className={''} />
            <InputForm label={'password'} type={'password'} className={''} />
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#0099CC] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Sign in
            </button>
        </form>
        <div>


        </div>
    </div>

</div>
  )
}

export default LoginForm