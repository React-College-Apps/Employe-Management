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
                                <div className="col-span-full">
                                    <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                        About
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={3}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about The Employe.</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <InputForm label={'First Name'} type={'text'} className={''} />
                                </div>

                                <div className="sm:col-span-3">
                                    <InputForm label={'Last Name'} type={'text'} className={''} />
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
                                <div className="sm:col-span-4">
                                    <InputForm label={'Email Address'} type={'email'} className={''} />

                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                        City
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <option>Tehran</option>
                                            <option>Sari</option>
                                            <option>Esfahan</option>
                                        </select>
                                    </div>
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