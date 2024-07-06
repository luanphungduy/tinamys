'use client';

import './mainLayout.css';
import MainNavbar from '@/components/MainNavbar/MainNavbar';
import Sidebar from '@/components/Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';

export default function Layout({ children }: { children: React.ReactNode }) {
    const showSidebar = useSelector((state: any) => state.sidebar.isSidebarOpen);

    return (
        <div className="app-container">
            {/* Navbar */}
            <MainNavbar />

            <div className="flex">
                {/* Sidebar */}
                <Sidebar />

                {/* Content */}
                <div className={`main ${showSidebar ? 'sidebar-open' : ''}`}>
                    <div className="content">{children}</div>
                </div>
            </div>
        </div>
    );
}
