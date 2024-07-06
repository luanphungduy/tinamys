'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import type { MenuProps } from 'antd';
import {
    AddWorkspaceIcon,
    HomeIcon,
    LeftArrowIcon,
    ListDepartmentIcon,
    ListPersonnelIcon,
    ListPositionIcon,
    ModifyInfoIcon,
    NewCompanyIcon,
    NewsIcon,
    NewsManagementIcon,
    NoteIcon,
    PinkCrossHairIcon,
    RightArrowIcon,
    YellowCrossHairIcon,
} from '@/components/Icons/Icons';
import { handleShowCreateWorkspaceForm } from '@/redux/state/modalCreateWorkspaceSlice';
import CustomModal from '../CreateWorkspaceForm/CreateWorkspaceForm';
import { handleOpenSidebar, handleCloseSidebar } from '@/redux/state/sidebarOpenSlice';
import './Sidebar.css';
import images from '@/assets/images';

type Props = {};

const Sidebar = (props: Props) => {
    const dispatch = useDispatch();

    // workspaces - test
    const hasWorkspace = useSelector((state: any) => state.workspace.hasWorkspace);

    //  handle open sidebar
    const showSidebar = useSelector((state: any) => state.sidebar.isSidebarOpen);

    // custom css
    const paddingLeftClass = showSidebar ? '' : '';

    const MenuSidebarItem: React.FC<{
        href: string;
        icon: JSX.Element;
        label: string;
    }> = ({ href, icon, label }) => {
        return (
            <div className={`custom-ant-menu-item ${showSidebar ? '' : 'justify-center'}`}>
                <Link className={`flex items-center ${paddingLeftClass}`} href={href}>
                    {icon}
                    {showSidebar && <p className="ml-3 text-theme">{label}</p>}
                </Link>
            </div>
        );
    };

    const commonSidebarItems: MenuProps['items'] = [
        {
            label: <MenuSidebarItem href="/homepage" icon={<HomeIcon />} label="Trang chủ" />,
            key: '1',
        },
        {
            label: <MenuSidebarItem href="/company-goal" icon={<PinkCrossHairIcon />} label="Mục tiêu công ty" />,
            key: '2',
        },
        {
            label: <MenuSidebarItem href="/my-goal" icon={<YellowCrossHairIcon />} label="Mục tiêu cá nhân" />,
            key: '3',
        },
        {
            label: <MenuSidebarItem href="/daily-task" icon={<NoteIcon />} label="Lịch làm việc" />,
            key: '4',
        },
    ];

    const workspaceItems: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div
                    className={
                        showSidebar
                            ? 'content-theme-light pl-6 flex justify-start items-center root'
                            : 'flex items-center p-2 justify-center root'
                    }
                >
                    <Image className="rounded-[3px] object-cover" width={50} alt="Logo" src={images.testAvtWorkspace} />
                    {showSidebar && (
                        <div className="flex flex-col px-3">
                            <div className="text-lg font-normal w-[180px] whitespace-nowrap overflow-hidden text-ellipsis text-theme">
                                luanphungduy
                            </div>
                            <span className="text-sm text-theme font-light">1 Nhân sự</span>
                        </div>
                    )}
                </div>
            ),
            children: [
                {
                    label: (
                        <MenuSidebarItem href="/list-department" icon={<ListDepartmentIcon />} label="Danh sách nhóm" />
                    ),
                    key: '1.1',
                },
                {
                    label: (
                        <MenuSidebarItem href="/list-position" icon={<ListPositionIcon />} label="Danh sách chức vụ" />
                    ),
                    key: '1.2',
                },
                {
                    label: (
                        <MenuSidebarItem
                            href="/list-personnel"
                            icon={<ListPersonnelIcon />}
                            label="Danh sách nhân sự"
                        />
                    ),
                    key: '1.3',
                },
                {
                    label: <MenuSidebarItem href="/news" icon={<NewsIcon />} label="Tin tức" />,
                    key: '1.4',
                },
                {
                    label: (
                        <MenuSidebarItem
                            href="/news-management"
                            icon={<NewsManagementIcon />}
                            label="Quản lý tin tức"
                        />
                    ),
                    key: '1.5',
                },
                {
                    label: <MenuSidebarItem href="/modify-info" icon={<ModifyInfoIcon />} label="Chỉnh sửa tổ chức" />,
                    key: '1.6',
                },
            ],
        },
    ];

    return (
        <div
            className={`sidebar sidebar-custom ${showSidebar ? 'sidebar-show' : 'sidebar-hide'} relative text-light`}
            style={{ background: 'inherit' }}
        >
            {showSidebar ? (
                <button
                    className="absolute right-[-20px] top-28 flex justify-center items-center rounded-full w-10 h-10 bg-[#fff] shadow-md cursor-pointer z-40"
                    onClick={() => dispatch(handleCloseSidebar())}
                >
                    <LeftArrowIcon />
                </button>
            ) : (
                <button
                    className="absolute right-[-20px] top-28 flex justify-center items-center rounded-full w-10 h-10 bg-[#fff] shadow-md cursor-pointer z-40"
                    onClick={() => dispatch(handleOpenSidebar())}
                >
                    <RightArrowIcon />
                </button>
            )}

            <div className="sidebar-detail__wrap">
                <div className="sidebar-detail">
                    {/* {hasWorkspace && (
                        <>
                            <Menu mode="inline" items={workspaceItems} />
                            <div className="h-[1px] my-2 bg-[#DCDCDC]"></div>
                        </>
                    )} */}
                    <Menu mode="inline" items={commonSidebarItems} />
                </div>

                {showSidebar ? (
                    <div
                        className={`flex flex-col justify-center items-center ${
                            hasWorkspace ? 'mx-5 my-7' : 'm-5 p-3 rounded-lg border-sky-500 border'
                        } newCompany`}
                    >
                        {!hasWorkspace && <NewCompanyIcon />}
                        <div className="text-center mb-2.5 content-theme-light">
                            <p className="text-theme text-sm">
                                {hasWorkspace
                                    ? 'Bạn có muốn tạo thêm không gian làm việc hiệu quả!'
                                    : 'Bạn chưa có không gian làm việc'}
                            </p>
                        </div>
                        <button
                            onClick={() => dispatch(handleShowCreateWorkspaceForm())}
                            className={`p-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-[#1c7fff] h-9 px-3 btn-newCompany ${
                                hasWorkspace && 'w-full'
                            }`}
                        >
                            Tạo ngay nào
                        </button>
                        <CustomModal />
                    </div>
                ) : (
                    <div className="flex justify-center items-center p-4 cursor-pointer">
                        <button onClick={() => dispatch(handleShowCreateWorkspaceForm())}>
                            <AddWorkspaceIcon />
                        </button>
                        <CustomModal />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
