import logo from '../../assets/images/logo/logo.png'
import InputForm from '../../components/common/inputForm'

const Login = () => {
    return (
        <>
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
            </div>

        </>
    )
}

export default Login