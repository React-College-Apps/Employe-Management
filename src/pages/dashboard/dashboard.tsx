import { LuUser2 } from "react-icons/lu";

import DashboardLayout from '../../components/layout/dashboardLayout';

const Dashboard = () => {

    return (
        <DashboardLayout>
            <main className="py-10 lg:pl-72 font-semibold">
                <div className="px-4 sm:px-6 lg:px-8">
                    <h1 className='text-red text-3xl'>Dashboard</h1>
                    <div className='grid grid-cols-12 space-x-3 mt-10 w-2/3'>
                        <div className='border border-gray-400 p-3 rounded bg-[#F3F3F7] col-span-6 '>
                            <div className='flex justify-between gap-4'>
                                <div className="col-span-2">
                                    <h3 className='text-[#5D5D6C] text-md'>Total Employees</h3>
                                    <p className='text-2xl mb-1'>135</p>
                                </div>
                                <div className="col-span-1 items-center bg-[#0099CC] rounded w-[60px] h-[60px] p-2 ">
                                    <LuUser2 className="text-white w-full h-full" />
                                </div>
                            </div>


                        </div>
                        <div className='border border-gray-400 bg-[#F3F3F7] col-span-6 '>
                        </div>
                    </div>
                </div>
            </main>
        </DashboardLayout>
    )
}

export default Dashboard