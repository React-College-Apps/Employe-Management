import InputForm from '../../components/common/inputForm'
import SelectInput from '../../components/common/selectInput'
import DashboardLayout from '../../components/layout/dashboardLayout'

const CreateUser = () => {
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

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-2">
                                    <InputForm label='Username' type={'text'} className={''} />
                                </div>
                                <div className="sm:col-span-2">
                                    <InputForm label={'Email Address'} type={'email'} className={''} />
                                </div>
                                <div className="sm:col-span-2">
                                    <InputForm label='Position' type={'text'} className={''} />
                                </div>



                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <InputForm label={'First Name'} type={'text'} className={''} />
                                </div>
                                <div className="sm:col-span-3">
                                    <InputForm label={'Last Name'} type={'text'} className={''} />
                                </div>
                                <div className="sm:col-span-3">
                                    <InputForm label={'Age'} type={'number'} className={''} />
                                </div>
                                <div className="sm:col-span-3">
                                    <SelectInput
                                        value={"gender"}
                                        title={"Gender"}
                                        options={[{
                                            title: "male", value: "male"
                                        },
                                        {
                                            title: "female", value: "female"
                                        }]}
                                        id={"gender"} onChange={function (value: any) {
                                            throw new Error('Function not implemented.')
                                        }} />
                                </div>



                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Change Password</h2>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-2">
                                    <InputForm label='Password' type={'password'} className={''} />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </main>
        </DashboardLayout>
    )
}

export default CreateUser