import { LuUser2 } from "react-icons/lu";

import DashboardLayout from '../../components/layout/dashboardLayout';
import DashboardCard from "../../components/dashboard/dashboardCard/dashboardCard";

const Dashboard = () => {

    return (
        <DashboardLayout>
            <main className="py-10 lg:pl-72 font-semibold">
                <div className="px-4 sm:px-6 lg:px-8">
                    <h1 className='text-red text-3xl'>Dashboard</h1>
                    <div className='grid grid-cols-12  mt-10 w-2/3 '>
                        <DashboardCard title={"Total Employees"} value={"135"} icon={<LuUser2 className="text-white w-full h-full" />} />
                        <DashboardCard title={"Total Employees"} value={"135"} icon={<LuUser2 className="text-white w-full h-full" />} />
                        <DashboardCard title={"Total Employees"} value={"135"} icon={<LuUser2 className="text-white w-full h-full" />} />
                    </div>
                </div>
            </main>
        </DashboardLayout>
    )
}

export default Dashboard