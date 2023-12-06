import React, { useState } from 'react'

import MobileLayout from './mobileLayout';
import Desktopleyout from './desktopLayout';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openSidebar = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <MobileLayout closeSideBar={openSidebar} isOpen={isOpen} />
            <Desktopleyout buttonClick={openSidebar} />
            children

        </>
    )
}

export default DashboardLayout