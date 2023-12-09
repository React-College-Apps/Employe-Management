import React from 'react'


interface IDashboardCardProps{
    title:string,
    value:number,
    icon:any,
}
const DashboardCard:React.FC<IDashboardCardProps> = ({title,value,icon}) => {
    return (
        <div className='border border-gray-400 p-3 rounded bg-[#F3F3F7] col-span-6 mb-3 mr-3'>
            <div className='flex justify-between gap-4'>
                <div className="col-span-2">
                    <h3 className='text-[#5D5D6C] text-md'>{title}</h3>
                    <p className='text-2xl mb-1'>{value}</p>
                </div>
                <div className="col-span-1 items-center bg-[#0099CC] rounded w-[60px] h-[60px] p-2 ">
                    {icon}
                </div>
            </div>
        </div>
    )
}

export default DashboardCard