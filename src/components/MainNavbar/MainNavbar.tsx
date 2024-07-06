import React, { useState } from 'react';
import './MainNavbar.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CheckCircleOutlined, DownOutlined, SearchOutlined, PlusOutlined } from '@ant-design/icons';
import type { MenuProps, RadioChangeEvent, TabsProps } from 'antd';
import { Dropdown, Input, Tooltip, Radio, Space, Modal, Button, Tabs, Drawer, Empty } from 'antd';
import { InsertRowAboveOutlined } from '@ant-design/icons';
import images from '@/assets/images';
import { BachelorHatIcon, BackgroundThemeIcon, BellIcon, QuestionIcon } from '@/components/Icons/Icons';
import { logoutService } from '@/services/authService';
import { useSelector } from 'react-redux';

type Props = {};

// ContactItem
const ContactItem: React.FC<{
    href: string;
    urlIcon: string;
    title: string;
    desc: string;
}> = ({ href, urlIcon, title, desc }) => {
    return (
        <a
            className="flex justify-start items-center bg-[#F2FAFF] gap-x-2 p-5 mb-2.5"
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            <div className="p-1.5 h-9">
                <Image src={urlIcon} alt="" />
            </div>
            <div>
                <p style={{ fontSize: '14px', fontWeight: '400', lineHeight: 'normal', color: 'rgba(0, 0, 0, 0.85)' }}>
                    {title}
                </p>
                <p style={{ fontSize: '12px', fontWeight: '400', lineHeight: 'normal', color: 'rgba(0, 0, 0, 0.45)' }}>
                    {desc}
                </p>
            </div>
        </a>
    );
};

// NotificationItem
const NotificationItem: React.FC<{
    urlNotifiAvatar: string;
    title: string;
    desc: string;
    time: string;
    tag?: string;
}> = ({ urlNotifiAvatar, title, desc, time, tag }) => {
    return (
        <div className="notification-item">
            <div className="readed"></div>
            <Image alt="" src={urlNotifiAvatar} className="avatar" />
            <div className="ml-3 max-w-xs">
                <div className="font-medium break-words">{title}</div>
                <div className="break-words">
                    {desc}
                    <span> {tag}</span>
                </div>
                <p className="font-normal text-sm text-blue-500 mt-1">{time}</p>
            </div>
        </div>
    );
};

const MainNavbar = (props: Props) => {
    const router = useRouter();

    // workspaces - test
    const hasWorkspace = useSelector((state: any) => state.workspace.hasWorkspace);

    // handle open search-bar
    const [isOpenSearch, setIsOpenSearch] = useState(false);

    // handle action - dropdown language
    const [languageValue, setLanguageValue] = useState('vi');
    const [themeValue, setThemeValue] = useState('light');

    const onChangeLanguage = (e: RadioChangeEvent) => {
        console.log('Language: ', e.target.value);
        setLanguageValue(e.target.value);
    };
    const onChangeTheme = (e: RadioChangeEvent) => {
        console.log('Theme: ', e.target.value);
        setThemeValue(e.target.value);
    };

    // handle open logout modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // handle logout
    const handleLogout = async () => {
        setIsModalOpen(false);
        const res = await logoutService();
        if (res) {
            console.log(res);
            localStorage.setItem('accessToken', '');
        } else {
            console.log('Log out failed');
        }
        if (localStorage.getItem('accessToken') === '') {
            router.push('/about');
        }
    };

    // background theme drawer
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    // workspace dropdowns items
    const itemsDropdownWorkspace: MenuProps['items'] = [
        {
            label: (
                <button
                    type="submit"
                    className="flex justify-start items-center gap-x-3 mb-1.5 hover:bg-blue-200 w-full pr-2"
                >
                    <Image src={images.testAvtWorkspace} alt="" width={40} height={40} /> luanphungduy
                </button>
            ),
            key: '1',
        },
    ];

    // avatar dropdown items
    const itemsDropdownAvatar: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div className="flex justify-center items-center py-5 px-4 border-b border-[#DCDCDC]">
                    <Image
                        alt="avtar-user"
                        src={images.avatar}
                        width={48}
                        height={48}
                        style={{
                            objectFit: 'cover',
                            borderRadius: '50%',
                        }}
                    />
                    <div className="flex flex-col justify-center items-start ml-2.5">
                        <span className="font-normal text-lg leading-5">B20DCPT120 - Phùng Duy Luân</span>
                        <span className="font-light text-sm leading-5">luanphungduy@gmail.com</span>
                    </div>
                </div>
            ),
        },
        {
            key: '3',
            label: (
                <button
                    onClick={() => router.push('/about')}
                    className="w-full flex justify-between items-center font-normal leading-normal text-base py-[9px] px-4 hover:bg-[#F6F6F6] undefined"
                >
                    Giới thiệu
                </button>
            ),
        },
        {
            key: '4',
            label: (
                <button
                    onClick={() => router.push('/profile-account')}
                    className="w-full flex justify-between items-center font-normal leading-normal text-base py-[9px] px-4 hover:bg-[#F6F6F6] undefined"
                >
                    Thông tin tài khoản
                </button>
            ),
        },
        {
            key: '5',
            label: (
                <button
                    // onClick=> Modal
                    className="w-full flex justify-between items-center font-normal leading-normal text-base py-[9px] px-4 hover:bg-[#F6F6F6] undefined"
                >
                    Đánh giá
                </button>
            ),
        },
        {
            key: '6',
            label: (
                <button
                    onClick={() => router.push('/terms-of-use')}
                    className="w-full flex justify-between items-center font-normal leading-normal text-base py-[9px] px-4 hover:bg-[#F6F6F6] border-b border-[#DCDCDC]"
                >
                    Chính sách về quyền riêng tư
                </button>
            ),
        },
        {
            key: '8',
            label: (
                <button className="w-full flex justify-between items-center font-normal leading-normal text-base py-[9px] px-4 hover:bg-[#F6F6F6] undefined">
                    Language
                </button>
            ),
            children: [
                {
                    key: '6-1',
                    label: (
                        <div className="dropdown-setting">
                            <div className="flex flex-col justify-center">
                                <div className="border-b border-[#DCDCDC] px-5 pb-2.5">
                                    <p className="text-xs font-medium my-3"> Ngôn ngữ</p>
                                    <Radio.Group
                                        style={{ width: '100%' }}
                                        onChange={onChangeLanguage}
                                        value={languageValue}
                                    >
                                        <Space direction="vertical">
                                            <Radio value="vi" className="radio-item">
                                                Tiếng Việt
                                            </Radio>
                                            <Radio value="en" className="radio-item">
                                                English
                                            </Radio>
                                            <Radio value="zh" className="radio-item">
                                                中國人
                                            </Radio>
                                        </Space>
                                    </Radio.Group>
                                </div>
                                <div className="border-b border-[#DCDCDC] px-5 pb-5">
                                    <p className="text-xs font-medium my-3">Chủ đề</p>
                                    <Radio.Group style={{ width: '100%' }} onChange={onChangeTheme} value={themeValue}>
                                        <Radio value="light" className="radio-item">
                                            <span className="flex items-center">
                                                <InsertRowAboveOutlined
                                                    style={{
                                                        fontSize: '34px',
                                                        backgroundColor: 'white',
                                                        color: 'rgb(230, 230, 230)',
                                                        marginRight: '20px',
                                                    }}
                                                />
                                                Sáng
                                            </span>
                                        </Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    ),
                },
            ],
        },
        {
            key: '9',
            label: (
                <button className="w-full flex justify-between items-center font-normal leading-normal text-base py-[9px] px-4 hover:bg-[#F6F6F6] border-b border-[#DCDCDC]">
                    Đổi mật khẩu
                </button>
            ),
        },
        {
            key: '10',
            label: (
                <div
                    className="py-2 text-[#555]"
                    // onClick=> modal => logout
                >
                    <button
                        onClick={showModal}
                        className="w-full flex justify-between items-center font-normal leading-normal text-base px-4 py-[9px] hover:bg-[#F6F6F6]"
                    >
                        Đăng xuất
                    </button>
                </div>
            ),
        },
    ];

    // contact dropdown items
    const itemsDropdownContact: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <p className="font-normal text-base text-center p-2.5 border-b border-[#DCDCDC]">Liên hệ trợ giúp</p>
            ),
        },
        {
            key: '2',
            label: (
                <div className="px-4 my-5">
                    <ContactItem
                        href="tel:+(84) 246 329 5589"
                        urlIcon={images.switchUserIcon}
                        title="Số điện thoại hỗ trợ"
                        desc="+(84) 246 329 5589"
                    />
                    <ContactItem
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@tinasoft.vn"
                        urlIcon={images.telegramIcon}
                        title="Email"
                        desc="contact@tinasoft.com"
                    />
                    <ContactItem
                        href="tel:+(84) 246 329 5589"
                        urlIcon={images.briefcaseIcon}
                        title="Địa chỉ hỗ trợ"
                        desc="Tầng 4, Tòa nhà Ellipse Tower, 110 Trần Phú, Hà Đông, Hà Nội"
                    />
                </div>
            ),
        },
        {
            key: '3',
            label: (
                <div className="px-4 my-5">
                    <div style={{ width: '400px', height: '220px', position: 'relative', overflow: 'hidden' }}>
                        {/* GGMap */}
                        <a
                            className="bg-white text-[#1079FF] font-light text-sm shadow-sm p-1"
                            href="https://maps.google.com/maps?ll=20.97741,105.784034&amp;z=15&amp;t=m&amp;hl=vi&amp;gl=US&amp;mapclient=embed&amp;cid=7400002239385068685"
                            target="_blank"
                            rel="noreferrer"
                            style={{ position: 'absolute', top: '12px', right: '12px' }}
                        >
                            Xem trên Google Maps
                        </a>
                    </div>
                </div>
            ),
        },
    ];

    // notification tab items
    const itemsNotificationTab: TabsProps['items'] = [
        {
            key: '1',
            label: 'Cá nhân',
            children: (
                <div className="list-noti custom-scrollbar">
                    <NotificationItem
                        urlNotifiAvatar={images.personalNotifiAvatar}
                        title="Nhân sự mới"
                        desc="Bạn đã được mời tham gia vào công ty "
                        tag="Clone_mys"
                        time="22/02/2024 "
                    />
                    <NotificationItem
                        urlNotifiAvatar={images.personalNotifiAvatar}
                        title="Nhân sự mới"
                        desc="Bạn đã được mời tham gia vào công ty "
                        tag="Clone_mys"
                        time="22/02/2024 "
                    />
                    <NotificationItem
                        urlNotifiAvatar={images.personalNotifiAvatar}
                        title="Nhân sự mới"
                        desc="Bạn đã được mời tham gia vào công ty "
                        tag="Clone_mys"
                        time="22/02/2024 "
                    />
                    <NotificationItem
                        urlNotifiAvatar={images.personalNotifiAvatar}
                        title="Nhân sự mới"
                        desc="Bạn đã được mời tham gia vào công ty "
                        tag="Clone_mys"
                        time="22/02/2024 "
                    />
                    <NotificationItem
                        urlNotifiAvatar={images.personalNotifiAvatar}
                        title="Nhân sự mới"
                        desc="Bạn đã được mời tham gia vào công ty "
                        tag="Clone_mys"
                        time="22/02/2024 "
                    />
                    <NotificationItem
                        urlNotifiAvatar={images.personalNotifiAvatar}
                        title="Nhân sự mới"
                        desc="Bạn đã được mời tham gia vào công ty "
                        tag="Clone_mys"
                        time="22/02/2024 "
                    />
                    <NotificationItem
                        urlNotifiAvatar={images.personalNotifiAvatar}
                        title="Nhân sự mới"
                        desc="Bạn đã được mời tham gia vào công ty "
                        tag="Clone_mys"
                        time="22/02/2024 "
                    />
                    <NotificationItem
                        urlNotifiAvatar={images.personalNotifiAvatar}
                        title="Nhân sự mới"
                        desc="Bạn đã được mời tham gia vào công ty "
                        tag="Clone_mys"
                        time="22/02/2024 "
                    />
                    <NotificationItem
                        urlNotifiAvatar={images.personalNotifiAvatar}
                        title="Nhân sự mới"
                        desc="Bạn đã được mời tham gia vào công ty "
                        tag="Clone_mys"
                        time="22/02/2024 "
                    />
                </div>
            ),
        },
        {
            key: '2',
            label: 'Nhóm',
            children: (
                <div className="list-noti custom-scrollbar">
                    <Empty
                        className=" p-5 flex flex-col justify-center items-center"
                        description="Không có dữ liệu"
                        image={images.noData.default.src}
                    />
                </div>
            ),
        },
        {
            key: '3',
            label: 'Công ty',
            children: (
                <div className="list-noti custom-scrollbar">
                    <Empty
                        className=" p-5 flex flex-col justify-center items-center"
                        description="Không có dữ liệu"
                        image={images.noData.default.src}
                    />
                </div>
            ),
        },
        {
            key: '4',
            label: 'Hệ thống',
            children: (
                <div className="list-noti custom-scrollbar">
                    <NotificationItem
                        urlNotifiAvatar={images.systemNotifiAvatar}
                        title="Mừng Xuân Giáp Thìn - Hàng Nghìn Niềm Vui!"
                        desc="Mão đi để đến Rồng về, xin gửi lời chúc muôn bề yêu thương"
                        time="09/02/2024 "
                    />
                    <NotificationItem
                        urlNotifiAvatar={images.systemNotifiAvatar}
                        title="Mừng Xuân Giáp Thìn - Hàng Nghìn Niềm Vui!"
                        desc="Mão đi để đến Rồng về, xin gửi lời chúc muôn bề yêu thương"
                        time="09/02/2024 "
                    />
                </div>
            ),
        },
    ];

    const onChangeTabNotifi = (key: string) => {
        console.log('Notifications Tab No - ', key);
    };

    // notification dropdown items
    const itemsDropdownNotification: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div className="flex p-3 items-center justify-between border-solid border-b border-slate-200">
                    <p className="font-normal text-base">Thông báo</p>
                    <button type="button">
                        <div className="font-normal text-sm text-blue-500 items-center flex">
                            Đánh dấu tất cả là đã đọc
                            <CheckCircleOutlined className="ml-1" />
                        </div>
                    </button>
                </div>
            ),
        },
        {
            key: '2',
            label: <Tabs centered items={itemsNotificationTab} onChange={onChangeTabNotifi} destroyInactiveTabPane />,
        },
    ];
    return (
        <div className="sticky">
            <div className="navbar flex items-center" style={{ background: 'inherit' }}>
                <div className="flex items-center navbar-left">
                    <Link href="/">
                        <Image alt="mysLogo" src={images.mysLogo} priority />
                    </Link>

                    {/* If has workspace */}
                    {hasWorkspace && (
                        <>
                            <div className="flex ml-3 mr-9 content-theme-light">
                                <div className="ml-2">
                                    <Dropdown menu={{ items: itemsDropdownWorkspace }} trigger={['click']} arrow={true}>
                                        <div className="flex justify-center items-center cursor-pointer text-theme">
                                            Không gian làm việc
                                            <DownOutlined className="mt-1 ml-2" style={{ fontSize: 10 }} />
                                        </div>
                                    </Dropdown>
                                </div>
                            </div>
                            <button className="inline-flex items-center justify-center rounded-md text-sm transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-[#1c7fff] p-1 font-light ml-5 px-2.5">
                                Tạo nhanh
                            </button>
                        </>
                    )}
                </div>
                <div className="flex items-center justify-center navbar-right gap-x-3">
                    <div
                        className="expanding-search-global transition-all"
                        style={isOpenSearch ? { width: 500 } : { width: 36, border: 'none', cursor: 'pointer' }}
                    >
                        <Input
                            placeholder="Tìm kiếm"
                            prefix={<SearchOutlined className={isOpenSearch ? '' : 'text-xl  ml-[6px]'} />}
                            onFocus={() => {
                                setIsOpenSearch(true); // Khi focus, set isOpenSearch thành true
                            }}
                            onBlur={() => {
                                setIsOpenSearch(false); // Khi không focus, set isOpenSearch thành false
                            }}
                            style={
                                isOpenSearch
                                    ? {
                                          border: '1px solid #40a9ff',
                                          boxShadow: '0 0 0 2px rgba(24,144,255,.2)',
                                      }
                                    : { border: 'none' }
                            }
                        />
                    </div>

                    <Tooltip placement="bottom" title="Hướng dẫn">
                        <Link href="/tutorial">
                            <BachelorHatIcon />
                        </Link>
                    </Tooltip>

                    <Dropdown
                        overlayClassName="dropdown-notification"
                        menu={{ items: itemsDropdownNotification }}
                        trigger={['click']}
                        placement="bottomRight"
                    >
                        <span>
                            <BellIcon />
                        </span>
                    </Dropdown>

                    <Dropdown
                        overlayClassName="dropdown-contact"
                        menu={{ items: itemsDropdownContact }}
                        trigger={['click']}
                        placement="bottomRight"
                    >
                        <span>
                            <QuestionIcon />
                        </span>
                    </Dropdown>

                    {hasWorkspace && (
                        <>
                            <button onClick={showDrawer}>
                                <BackgroundThemeIcon />
                            </button>
                            <Drawer
                                rootClassName="drawer-custom"
                                style={{ widows: 376 }}
                                title="Chọn phông nền"
                                headerStyle={{ textAlign: 'center', paddingLeft: '12px' }}
                                bodyStyle={{ padding: '0px 10px' }}
                                onClose={onClose}
                                open={open}
                            >
                                <div className="grid grid-cols-2 gap-2.5 text-white text-xs mb-5 h-[6.75rem]">
                                    <button
                                        type="button"
                                        className="flex flex-col justify-end items-start hover:opacity-[.85] transition duration-300"
                                        style={{
                                            background:
                                                'linear-gradient(rgb(89, 171, 68) 20%, rgb(124, 199, 109) 20%, rgb(124, 199, 109) 40%, rgb(246, 233, 145) 40%, rgb(246, 233, 145) 60%, rgb(223, 192, 234) 60%, rgb(223, 192, 234) 80%, rgb(143, 100, 160) 80%)',
                                        }}
                                    >
                                        <p className="px-1.5 py-1">Chọn màu</p>
                                    </button>
                                    <button
                                        type="button"
                                        className="h-full relative hover:opacity-[.85] transition duration-300"
                                    >
                                        <Image
                                            alt="bgComapany"
                                            src={images.bgWindow}
                                            style={{ color: 'transparent', height: '100%', width: '100%' }}
                                        />
                                        <p
                                            className="absolute left-0 bottom-0 px-1.5 w-full text-start py-1"
                                            style={{ background: 'rgba(0, 0, 0, 0.3)' }}
                                        >
                                            Hình ảnh có sẵn
                                        </p>
                                    </button>
                                </div>
                                <p className="text-sm text-black font-normal">Tùy chỉnh</p>
                                <div className="grid grid-cols-2 gap-2.5 my-4 max-h-[6.75rem]">
                                    <label
                                        htmlFor="file"
                                        className="rounded cursor-pointer overflow-hidden h-[6.75rem] max-h-[6.75rem] hover:opacity-[.85] transition duration-300 bg-[#d0d4db]"
                                    >
                                        <div className="h-full flex justify-center items-center">
                                            <PlusOutlined style={{ fontSize: '24px', color: 'rgb(112, 112, 112)' }} />
                                            <input
                                                type="file"
                                                id="file"
                                                accept="image/png, image/jpg, image/jpeg"
                                                className="hidden"
                                            />
                                        </div>
                                    </label>
                                </div>
                                <button className="p-2 inline-flex items-center justify-center rounded-md transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-[#ee4b4b] font-semibold text-base h-9 px-3 mt-4">
                                    Xoá phông nền
                                </button>
                            </Drawer>
                        </>
                    )}

                    <Dropdown
                        overlayClassName="dropdown-user"
                        menu={{ items: itemsDropdownAvatar, expandIcon: null, triggerSubMenuAction: 'click' }}
                        trigger={['click']}
                        placement="bottomRight"
                        overlayStyle={{ minWidth: '31px', left: '955px', top: '49px' }}
                    >
                        <Image alt="avt" src={images.avatar} className="navbar-avatar cursor-pointer" />
                    </Dropdown>
                </div>
            </div>
            <Modal
                width={368}
                centered
                open={isModalOpen}
                onCancel={handleCancel}
                className="logout-modal"
                footer={null}
            >
                <div className="text-center mt-7">
                    <Image alt="robot-mys" src={images.bot} height={80} style={{ margin: '0 auto' }} priority />
                    <p className="my-4 text-base">Bạn có muốn đăng xuất không?</p>
                </div>
                <div className="ant-modal-confirm-btns">
                    <Button onClick={handleCancel}>Hủy</Button>
                    <Button onClick={handleLogout} type="primary">
                        Đồng ý
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default MainNavbar;
