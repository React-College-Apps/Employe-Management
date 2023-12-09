
import { MdClose } from "react-icons/md";

import logo from '../../assets/images/logo/logo.png'
import sideBarData from '../../constant/sidebar'

const MobileLayout = ({ isOpen, closeSideBar }: { isOpen: boolean, closeSideBar: () => any }) => {
    return (
        <>
            <div className={`relative z-50  ${isOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
                <div className="fixed inset-0 flex">
                    <div className="relative mr-16 flex w-full max-w-xs flex-1">
                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                            <button onClick={closeSideBar} type="button" className="-m-2.5 p-2.5">
                                <span className="sr-only">Close sidebar</span>
                                <MdClose className="h-6 w-6 text-white" />
                            </button>
                        </div>
                        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                            <div className="flex h-16 shrink-0 items-center">
                                <img
                                    className="h-8 w-auto"
                                    src={logo}
                                    alt="Your Company"
                                />
                            </div>
                            <nav className="flex flex-1 flex-col">
                                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                    <li>
                                        <ul role="list" className="-mx-2 space-y-1">
                                            {sideBarData.map((item: any, index:any) => (
                                                <li key={index}>
                                                    <a
                                                        href="#"
                                                        className="bg-gray-800 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                                    >
                                                        {item.icon}
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileLayout