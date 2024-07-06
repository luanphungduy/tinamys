'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { DownloadOutlined, CheckOutlined, StarOutlined, MailOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import images from '@/assets/images';
import {
    BlueDot,
    Circle1,
    GreenLine1,
    GreenLine2,
    OrangeArrow,
    PinkLine,
    RedLine,
    ThreeRays,
} from '@/components/DecorPatterns/LineDraw';
import NavbarAbout from '@/components/NavbarAbout/NavbarAbout';
import BenefitItem from '@/components/BenefitItem/BenefitItem';
import { StarIcon } from '@/components/Icons/Icons';
import { BenefitSlider, FeedbackSlider } from '@/components/Slider/Slider';
import styles from './about.module.scss';
import CustomCollapse from '@/components/CustomCollapse/Collapse';

const cx = classNames.bind(styles);

type Props = {};

// Component
const ListItem: React.FC<{ description: string }> = ({ description }) => (
    <li className="flex gap-x-1 lg:gap-x-6 items-center">
        <div className="w-4 h-4 xxl:w-5 xxl:h-5">
            <svg
                width="14"
                height="10"
                className="rounded-full w-4 h-4 xxl:w-5 xxl:h-5 xxxl:w-6 xxxl:h-6 p-1 bg-[#0070FF]"
                viewBox="0 0 23 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8.46589 12.2463L20.7121 0L22.5757 1.89018L8.46589 16L0 7.53411L1.89018 5.64393L8.46589 12.2463Z"
                    fill="white"
                ></path>
            </svg>
        </div>
        <p className={`text-[16px] ${cx('font-jakarta')} leading-[175%] font-bold text-[#6B6B6B]`}>{description}</p>
    </li>
);

const ListItem2: React.FC<{ description: string }> = ({ description }) => (
    <li className="flex gap-x-2 lg:gap-x-7 justify-start items-start">
        <div className="w-4 h-4 xxl:w-5 xxl:h-5">
            <CheckOutlined style={{ fontSize: '15px', color: 'rgb(43, 89, 255)', marginTop: '5px' }} />
        </div>
        <p className="text-sm text-justify xxl:text-xl xl:text-lg lg:text-lg font-normal text-[#495460] leading-[150%]">
            {description}
        </p>
    </li>
);

const AboutPage = (props: Props) => {
    const tokenLogin = localStorage.getItem('accessToken');

    // Submit form
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    // Phone validate
    const validatePhone = (rule: any, value: any, callback: any) => {
        const phoneRegex = /^(0[1-9][0-9]{8})$/; // Số điện thoại di động Việt Nam bắt đầu bằng số 0, tiếp theo là số từ 1 đến 9, và sau đó là 8 chữ số.
        if (!value || phoneRegex.test(value)) {
            callback(); // Pass validation
        } else {
            callback('Số điện thoại không hợp lệ'); // Fail validation
        }
    };

    //  Form Type
    type FieldType = {
        fullname?: string;
        phone?: string;
        email?: string; // Thêm kiểu dữ liệu cho trường email
        message?: string;
    };

    // Handle scroll to section when navigate button is clicked
    const scrollToSection = (id: string) => {
        const section: HTMLElement | null = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Handle Show On top Btn
    const [showButton, setShowButton] = useState(false);
    const SCROLL_THRESHOLD = 500;

    useEffect(() => {
        const handleScroll = () => {
            const isScrollBelowThreshold = window.scrollY > SCROLL_THRESHOLD;
            if (isScrollBelowThreshold && !showButton) {
                setShowButton(true);
                // console.log('test 1');
            } else if (!isScrollBelowThreshold && showButton) {
                setShowButton(false);
                // console.log('test 2');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [showButton]);

    return (
        <div className={cx('wrapper')}>
            {/* Header */}
            <NavbarAbout />

            {/* Body */}
            {/* Section 1 */}
            <section id="home" className={`relative ${cx('section-one')}`}>
                <div className={`${cx('sectionOne-container')} px-6 py-5 lg:px-8 lg:py-10 xl:px-14 xl:py-16`}>
                    <div className="flex flex-wrap items-center w-full sm:flex-nowrap lg:justify-center lg:mx-auto sm:gap-x-3 md:gap-x-7 lg:gap-x-10 xl:gap-x-14 max-w-fit mx-auto">
                        <div className="relative z-10 w-11/12 max-w-[19rem] mx-auto md:w-1/2 sm:max-w-fit md:hidden">
                            <div className="w-full">
                                <Image src={images.ip1} alt="Mapping Your Success" />
                            </div>
                            <div
                                className="absolute rounded-lg lg:rounded-2xl xl:rounded-[20px] text-[#0C1523] bg-white px-2 py-1 lg:px-3 lg:py-2 xl:px-5 xl:py-4 bottom-[15%] left-[58%]"
                                style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 20px 41px 62px' }}
                            >
                                <div className="flex items-center pb-1 lg:pb-1.5 xl:pb-3">
                                    <div className="circle-container flex h-2.5 w-4 lg:h-3 lg:w-5 xl:h-[1.625rem] xl:w-[2.375rem]">
                                        <Image src={images.twoCircle} alt="Mapping Your Success" />
                                    </div>
                                    <h5 className="text-[9.5px] md:text-base lg:text-lg xl:text-xl xxl:text-2xl font-bold ml-1 xxxl:ml-3 leading-[150%]">
                                        MYS
                                    </h5>
                                </div>
                                <p className="text-justify font-medium text-[6.5px] lg:text-[10px] xl:text-xs xxl:text-base leading-[150%]">
                                    Phần mềm quản lý mục tiêu công ty, nhóm, cá nhân theo từng năm, tháng, tuần, ngày và
                                    quản lý công việc.
                                </p>
                            </div>
                        </div>
                        <div className="relative xxxl:translate-x-10 w-full order-first sm:order-last">
                            <div className="relative flex-1 flex flex-col items-center">
                                <h1
                                    className={`relative ${cx(
                                        'font-jakarta',
                                    )} text-3xl max-[768px]:hidden sm:text-3xl md:text-[28px] lg:text-3xl xl:text-[32px] xxl:text-[50px] text-[#001E4D] font-medium z-10 leading-normal xl:leading-[3.25rem] xxl:leading-[3.25rem]`}
                                >
                                    <span className="relative">
                                        Thay
                                        <div className="absolute -top-1/2 -left-1/2 w-full h-full">
                                            <ThreeRays />
                                        </div>
                                    </span>{' '}
                                    đổi cách quản lý công việc
                                </h1>
                                <h1
                                    className={`relative ${cx(
                                        'font-jakarta',
                                    )} text-3xl sm:text-3xl md:text-[34px] lg:text-4xl xl:text-[42px] xxl:text-[60px] text-[#001E4D] font-bold z-10 leading-normal xl:leading-[4.25rem] xxl:leading-[6.25rem]`}
                                >
                                    Mapping Your{' '}
                                    <span className="relative">
                                        Success
                                        <div className="absolute top-0 left-0 w-full h-full">
                                            <RedLine />
                                        </div>
                                    </span>
                                </h1>
                                <ul className="pt-3 flex flex-col gap-y-2.5 xl:gap-y-2 xxxl:gap-y-5">
                                    <ListItem description="Quản lý mục tiêu của công ty, nhóm, nhân sự một cách dễ dàng và tiện lợi" />
                                    <ListItem description="Cho phép lập mục tiêu theo chu kì năm, quý, tháng, tuần" />
                                    <ListItem description="Quản lý checkin tiến độ mục tiêu, dự án của công ty, nhóm" />
                                    <ListItem description="Tự động nhắc việc và thông báo đến những người liên quan" />
                                </ul>

                                {/* Button in Mobile */}
                                <div className="pt-8 lg:pt-16 xxl:pt-24 gap-x-7 md:hidden">
                                    <Link
                                        target="_blank"
                                        href={'https://apps.apple.com/us/app/tinamys/id6449159582'}
                                        className="inline-block w-[106px] lg:w-32 xl:w-36 xxl:w-[11.25rem] h-9 lg:h-10 xl:h-12 xxl:h-[3.375rem] mr-2.5 lg:mr-3 xl:mr-4 xxl:mr-5 xxxl:mr-7"
                                    >
                                        <Image src={images.appStore} alt="MYS App Store" className="w-full h-full" />
                                    </Link>

                                    <Link
                                        target="_blank"
                                        href={'https://apps.apple.com/us/app/tinamys/id6449159582'}
                                        className="inline-block w-[106px] lg:w-32 xl:w-36 xxl:w-[11.125rem] h-9 lg:h-10 xl:h-12 xxl:h-[3.375rem]"
                                    >
                                        <Image src={images.chPlay} alt="MYS App Store" className="w-full h-full" />
                                    </Link>
                                </div>
                                {/* Button in PC */}
                                <div className="md:flex flex-col items-center mt-5 hidden">
                                    <div className="flex items-center gap-x-3">
                                        <Button
                                            type="primary"
                                            shape="round"
                                            danger
                                            size="large"
                                            style={{ backgroundColor: '#FF6C44' }}
                                            icon={<DownloadOutlined style={{ fontSize: '18px' }} />}
                                        >
                                            <span className={`${cx('font-jakarta')} text-sm`}>Tải Profile</span>
                                        </Button>
                                        <Button
                                            type="primary"
                                            shape="round"
                                            size="large"
                                            style={{ backgroundColor: '#0070FF' }}
                                        >
                                            <Link
                                                href={tokenLogin ? '/' : '/login'}
                                                className={`${cx('font-jakarta')} text-sm`}
                                            >
                                                Trải nghiệm ngay!
                                            </Link>
                                        </Button>
                                    </div>
                                    <div>
                                        <Image
                                            src={images.imgAboutPage}
                                            alt="img-about-page-section-1"
                                            priority={true}
                                            className="relative mx-auto w-[80%]"
                                        />
                                        <span className="absolute top-[54%] right-[5%]">
                                            <GreenLine1 />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section
                className={`${cx(
                    'section-two',
                )} lg:pt-14 px-5 sm:px-7 md:px-12 pt-6 md:pt-0 lg:px-14 pb-10 xl:mt-5 xxl:mt-10 max-w-[112rem] mx-auto`}
            >
                <div className="flex flex-wrap items-center sm:flex-nowrap sm:gap-5 justify-center lg:gap-x-16 max-w-[80rem] lg:mx-auto xl:gap-16">
                    <div className="relative w-11/12 max-w-[20rem] sm:max-w-fit md:w-[46%] lg:w-[60%] xl:w-[50%] mx-auto sm:m-0 hover:scale-105 duration-300">
                        <Image
                            src={images.imgSectionTwo}
                            alt="Lập kế hoạch chi tiết theo chu kì năm, quý, tháng, tuần"
                            style={{ color: 'transparent', width: '100%', height: '100%' }}
                            className="hidden md:inline-block"
                        />
                        <Image
                            src={images.ip2}
                            alt="Lập kế hoạch chi tiết theo chu kì năm, quý, tháng, tuần"
                            style={{ color: 'transparent', width: '100%', height: '100%' }}
                            className="md:hidden"
                        />
                        <div className="hidden md:inline-block">
                            <span className="absolute -top-[30%] -right-[6%]">
                                <PinkLine />
                            </span>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 xl:w-2/5 lg:pl-12 xl:pl-0 order-first sm:order-last">
                        <h1 className="text-xl lg:text-3xl xl:text-4xl xxl:text-[39px] xxl:leading-[150%] leading-9 font-semibold pb-2 lg:pb-6 text-[#001E4D] tracking-tighter">
                            Lập mục tiêu theo chu kì năm, quý, tháng, tuần
                        </h1>
                        <ul className="flex flex-col gap-1.5 lg:gap-x-7 justify-start items-start">
                            <ListItem2 description="Lập mục tiêu chi tiết theo năm, quý, tháng, tuần" />
                            <ListItem2 description="Tổ chức các hạng mục công việc, phân bổ nhân lực liên nhóm để thực hiện mục tiêu và quản lý tiến độ trên một nền tảng hợp nhất" />
                            <ListItem2 description="Tổ chức công việc theo dự án, báo cáo độc lập, theo dõi đầu việc đa chiều, cảnh báo tiến độ thông minh" />
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section className="px-5 sm:px-7 lg:pt-14 md:px-12 lg:px-14 pb-10 xl:mt-5 xxl:mt-10 max-w-[112rem] mx-auto">
                <div className="flex flex-wrap items-center sm:flex-nowrap sm:gap-5 md:justify-center lg:mx-auto lg:gap-x-10 max-w-[80rem]">
                    <div className="relative w-full md:w-1/2 xl:w-2/5 xxl:w-1/2 xxl:pl-5">
                        <h1 className="text-xl lg:text-3xl xl:text-4xl xxl:text-[39px] xxl:leading-[178%] leading-9 font-semibold pb-2 lg:pb-6 text-[#001E4D] tracking-tighter">
                            Quản lý mục tiêu theo cấp bậc công ty, nhóm, nhân viên
                        </h1>
                        <ul className="flex flex-col gap-1.5 lg:gap-x-7 justify-start items-start">
                            <ListItem2 description="Chia nhỏ mục tiêu theo cấp bậc từ công ty, nhóm đến từng nhân viên" />
                            <ListItem2 description="Giám sát tiến độ thực hiện mục tiêu, đánh giá hiệu quả, giúp cấp trên đưa ra quyết định chính xác và nhanh chóng" />
                            <ListItem2 description="Giao tiếp và trao đổi nội bộ trên từng công việc. Thông tin đồng bộ, kịp thời và dễ dàng phối hợp" />
                            <ListItem2 description="Quản lý mục tiêu, tiến độ hoàn thành của nhân viên cấp dưới trên một bảng chung" />
                        </ul>
                    </div>

                    <div className="relative w-10/12 max-w-[18.75rem] md:w-[44%] lg:w-[60%] xl:w-[50%] xxl:w-3/5 sm:max-w-fit mx-auto sm:m-0 hover:scale-105 duration-300">
                        <OrangeArrow />

                        <Image
                            src={images.imgSectionThree}
                            alt="Quản lý mục tiêu theo cấp bậc công ty, phòng ban, cá nhân"
                            className="hidden md:inline-block"
                        />

                        <Image
                            src={images.ip3}
                            alt="Quản lý mục tiêu theo cấp bậc công ty, phòng ban, cá nhân"
                            className="md:hidden"
                        />
                    </div>
                </div>
            </section>

            {/* Section 4 */}
            <section className="px-5 sm:px-7 lg:pt-14 md:px-12 lg:px-14 pb-10 xl:mt-5 xxl:mt-10 max-w-[112rem] mx-auto">
                <div className="flex flex-wrap items-center sm:flex-nowrap sm:gap-5 md:justify-center lg:mx-auto lg:gap-x-16 max-w-[80rem]">
                    <div className="w-10/12 max-w-[18.75rem] md:w-[44%] lg:w-[60%] xl:w-[50%] sm:max-w-fit mx-auto sm:m-0 hover:scale-105 duration-300">
                        <Image
                            src={images.imgSectionFour}
                            alt="Quản lý công việc cấp dưới mys"
                            className="hidden md:inline-block"
                        />
                        <Image src={images.ip4} alt="Quản lý công việc cấp dưới mys" className="md:hidden" />
                    </div>
                    <div className="relative w-full md:w-1/2 lg:w-[60%] xl:w-2/5 lg:pl-12 xl:pl-0 order-first sm:order-last">
                        <h1 className="text-xl lg:text-3xl xl:text-4xl xxl:text-[39px] xxl:leading-[178%] leading-9 font-semibold pb-2 lg:pb-6 text-[#001E4D] tracking-tighter">
                            Kế hoạch công việc hàng ngày
                        </h1>
                        <ul className="flex flex-col gap-1.5 lg:gap-x-7 justify-start items-start">
                            <ListItem2 description="Chia nhỏ mục tiêu thành các công việc hàng ngày" />
                            <ListItem2 description="Cho phép lên kế hoạch công việc một cách chi tiết và rõ ràng hơn" />
                            <ListItem2 description="Định hướng mục tiêu của mỗi công việc đang được thực hiện hàng ngày" />
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 5 */}
            <section className="section-five px-5 sm:px-7 md:px-12 lg:px-14 xl:mt-5 xxl:mt-10 max-w-[112rem] mx-auto">
                <div className="flex flex-wrap items-center justify-center sm:flex-nowrap sm:gap-5 lg:mx-auto lg:gap-x-16 max-w-[80rem]">
                    <div className="relative w-full md:w-1/2 xl:w-2/5 xxl:w-2/5">
                        <h1 className="text-xl lg:text-3xl xl:text-4xl xxl:text-[39px] xxl:leading-[178%] leading-9 font-semibold pb-2 lg:pb-6 text-[#001E4D] tracking-tighter">
                            Checkin tiến độ công việc, mục tiêu
                        </h1>
                        <ul className="flex flex-col gap-1.5 lg:gap-x-7 justify-start items-start">
                            <ListItem2 description="Checkin tiến độ công việc định kỳ để giúp quản lý đưa ra quyết định chính xác" />
                            <ListItem2 description="Hệ thống tự động nhắc tiến độ công việc đến những người liên quan" />
                            <ListItem2 description="Hệ thống tự động cảnh báo công việc sắp đến hạn, quá hạn" />
                        </ul>
                    </div>
                    <div className="relative w-10/12 max-w-[18.75rem] md:w-[44%] lg:w-[60%] xl:w-[50%] xxl:w-3/5 sm:max-w-fit mx-auto sm:m-0 hover:scale-105 duration-300">
                        <div>
                            <Image
                                src={images.imgSectionFive}
                                alt="Báo cáo tiến độ công việc mys"
                                className="hidden md:inline-block"
                            />
                            <Image src={images.ip3} alt="Báo cáo tiến độ công việc mys" className="md:hidden" />
                            <div>
                                <span className={`absolute top-[46%] right-0 ${cx('svg-line')} hidden md:inline-block`}>
                                    <PinkLine style={{ width: '140px', height: '160px' }} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div id="feature" className="h-9 lg:h-[5rem] xxl:h-[6.5rem]"></div>

            {/* Section 6 - Benefits */}
            <section id="benefit" className="benefit pb-16 max-w-[112rem] mx-auto">
                <div className="benefit-container pt-7 lg:pt-0">
                    {/* Benefit grid - PC */}
                    <ul className="benefit-grid hidden sm:grid grid-cols-2 xxl:grid-cols-3 gap-x-8 gap-y-11 sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-9/12 xxl:w-8/12 mx-auto">
                        <li className="hover:scale-100 duration-300 p-0">
                            <h3 className="pb-2 md:pb-3 xl:pb-4 text-[#000001] font-bold text-2xl sm:text-[28px] md:text-3xl lg:text-4xl xl:text-5xl leading-[2.875rem]">
                                Ưu điểm nổi trội của MYS
                            </h3>
                            <p className="text-[#323232] pb-7 font-normal text-sm md:text-base xl:text-lg leading-7 pr-12">
                                Với những ưu điểm và tính năng vượt trội của MYS, công nghệ và giải pháp của chúng tôi
                                sẽ giúp bạn đạt được mục tiêu, tối ưu hoá năng suất của doanh nghiệp.
                            </p>
                        </li>
                        <BenefitItem
                            src={images.easy}
                            title="Dễ sử dụng và tiện lợi và tiết kiệm thời gian"
                            desc="Giao diện đơn giản và thân thiện, giúp người dùng dễ dàng sử dụng và tiết kiệm thời gian"
                        />
                        <BenefitItem
                            src={images.smartphone}
                            title="Hỗ trợ đa nền tảng"
                            desc="Ứng dụng hiện có mặt trên iOS, Android và Website"
                        />
                        <BenefitItem
                            src={images.reduceCost}
                            title="Chi phí thấp"
                            desc="Cho phép người dùng sử dụng miễn phí các tính năng cơ bản"
                        />
                        <BenefitItem
                            src={images.target}
                            title="Hiệu quả"
                            desc="Giúp tăng hiệu suất công việc và đưa ra quyết định chính xác"
                        />
                        <BenefitItem
                            src={images.ai}
                            title="Hỗ trợ công nghệ AI"
                            desc="Người dùng sử dụng ứng dụng được hỗ trợ bởi công nghệ thông minh AI"
                        />
                    </ul>

                    {/* Benefit slide - Mobile */}
                    <div className="benefit-slider sm:hidden bg-[#F2FAFF] pb-10">
                        <div className="pt-8 px-9 pb-8">
                            <h3 className="text-[#000001] text-2xl font-bold leading-6 mb-2">
                                Ưu điểm nổi trội của MYS
                            </h3>
                            <p className="text-[#323232] text-sm font-normal leading-5">
                                Với những ưu điểm và tính năng vượt trội của MYS, công nghệ và giải pháp của chúng tôi
                                sẽ giúp bạn đạt được mục tiêu, tối ưu hoá năng suất của doanh nghiệp.
                            </p>
                        </div>
                        <BenefitSlider />
                    </div>
                </div>
            </section>

            <div id="foratrial" className="h-[4.5rem] lg:h-[5rem] xxl:h-[6.5rem]"></div>

            {/* Section 7 */}
            <section className="w-full pb-[80px] pt-10 max-w-[112rem] mx-auto">
                <div className={`${cx('section-seven-body')} w-full mx-auto relative`}>
                    <div className={`${cx('img-iphone')} hover:scale-105 duration-300`}>
                        <Image src={images.ip7} alt="Trải nghiệm ứng dụng mys" />
                    </div>
                    <div className={cx('section-seven-content')}>
                        <div className="title font-bold text-xl sm:text-2xl md:text-3xl xl:text-4xl xxl:text-5xl xl:leading-[3.625rem] leading-[120%] pb-5 max-w-[690px]">
                            Trải nghiệm ứng dụng quản lý <br /> công việc TinaMYS
                        </div>
                        <div
                            className={`${cx(
                                'description',
                            )} inline-block font-medium text-xs md:text-sm lg:text-base xl:text-lg leading-[160%] xl:leading-[1.813rem] pb-5 text-justify`}
                        >
                            Khám phá sức mạnh đột phá với TinaMYS - giải pháp quản trị mục tiêu, công việc cho doanh
                            nghiệp: Đa chiều - thông minh - linh hoạt - hiệu quả
                        </div>
                        <div className="flex flex-col gap-1.5 sm:flex-row md:gap-2 lg:gap-3 xl:xl:gap-4 xxl:gap-5">
                            <Link
                                target="_blank"
                                href={'https://apps.apple.com/us/app/tinamys/id6449159582'}
                                className="w-[106px] lg:w-32 xl:w-36 xxl:w-[11.125rem] h-9 lg:h-10 xl:h-12 xxl:h-[3.375rem] mr-2.5 lg:mr-3 xl:mr-4 xxl:mr-5 xxxl:mr-7"
                            >
                                <Image src={images.appStore} alt="MYS App Store" className="w-full h-full" />
                            </Link>

                            <Link
                                target="_blank"
                                href={'https://apps.apple.com/us/app/tinamys/id6449159582'}
                                className="w-[106px] lg:w-32 xl:w-36 xxl:w-[11.125rem] h-9 lg:h-10 xl:h-12 xxl:h-[3.375rem]"
                            >
                                <Image src={images.chPlay} alt="MYS App Store" className="w-full h-full" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 8 - Feedbacks */}
            <section className="SectionNight max-w-[112rem] mx-auto">
                <div
                    className={`flex flex-col justify-center items-center mt-[88px] ${cx(
                        'background-mobile',
                        'background',
                    )}`}
                >
                    <div className="px-6 w-full lg:w-11/12 xl:w-10/12">
                        <div className="sectionNight-body pt-[25px] flex flex-wrap justify-center items-center gap-6 pb-5 sm:pb-7 md:pb-8 lg:pb-10 xl:pb-12">
                            <div
                                className={`w-[93%] max-w-[20rem] sm:max-w-fit sm:w-[80%] md:w-5/12 ${cx(
                                    'content-img',
                                )}`}
                            >
                                <Image src={images.backgroundSection8} alt="Những đánh giá về mys" />
                            </div>
                            <div className="w-full md:w-1/2 order-first md:order-last">
                                <div className="p-0 text-left">
                                    <div className="not-italic font-bold text-[#272727] text-[28px] sm:text-[30px] md:text-[34px] lg:text-[36px] xl:text-[45px] leading-9 md:leading-10 lg:leading-[2.75rem] xl:leading-[3rem] xxl:leading-[3.375rem]">
                                        Những phản hồi <br></br> từ khách hàng
                                    </div>
                                    <div className="flex justify-start items-center gap-x-2 pt-1 lg:pt-5">
                                        <StarIcon style={{ width: 20, height: 20, marginTop: 10 }} />
                                        <StarIcon style={{ width: 20, height: 20, marginTop: 10 }} />
                                        <StarIcon style={{ width: 20, height: 20, marginTop: 10 }} />
                                        <StarIcon style={{ width: 20, height: 20, marginTop: 10 }} />
                                        <StarIcon style={{ width: 20, height: 20, marginTop: 10 }} />
                                    </div>
                                    <div className="font-inter text-justify font-normal text-[#495460] text-xs md:text-sm lg:text-base xl:text-lg xxl:text-xl leading-[1.625rem] pt-1 lg:pt-8 pb-6 sm:pr-5 sm:pt-3">
                                        &quot;Một ứng dụng thú vị, nơi tôi có thể chia sẻ với bạn bè và những người xung
                                        quanh. Mong mô hình của app sẽ được nhân rộng và nhiều người biết đến&quot;
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${cx('sectionnight')} pb-12 overflow-hidden`}>
                        {/* Slider */}
                        <FeedbackSlider />
                    </div>
                </div>
            </section>

            {/* Section 10 - Question about MYS */}
            <section className="max-w-[112rem] mx-auto relative">
                <div className='hidden lg:inline-block absolute bottom-0 right-[5%] lg:w-36 xxl:w-fit"'>
                    <Image src={images.imgSection10} alt="Lập kế hoạch mục tiêu ngày tháng năm mys" />
                </div>

                <div className="pb-[54px] lg:pb-[88px] xxl:pb-[124px] px-8 md:px-0 sectionTen-body bg-white lg:bg-[#f2faff]">
                    <div className="sectionTen-title pt-8 sm:pt-10 md:pt-12 lg:pt-14 xxl:pt-[110px] font-black text-[#0E1133] text-start sm:text-center text-[28px] sm:text-3xl md:text-[32px] lg:text-4xl xxl:text-[39px] leading-[3.375rem] sm:leading-normal">
                        Những câu hỏi về MYS
                    </div>
                    <div className="sectionTen-content flex justify-center flex-col items-center mx-auto lg:flex-row lg:items-start lg:gap-5 px-2 lg:px-6 md:w-[90%] lg:w-[85%] pt-5 sm:pt-6 md:pt-8 lg:pt-14 xl:pt-14 xxl:pt-[90px]">
                        <div className="w-full">
                            <CustomCollapse
                                title="MYS có dễ dàng sử dụng không?"
                                desc="Ứng dụng hoàn toàn thân thiện với người dùng, các tính năng được bố trí rõ ràng, logic giúp người dùng dễ dàng tương tác. Đội ngũ hỗ trợ 24/7 sẵn sàng giải đáp mọi thắc mắc của người dùng."
                            />
                            <CustomCollapse
                                title="MYS có trên những nền tảng nào?"
                                desc="MYS đã sẵn sàng được sử dụng trên web và có mặt tại ứng dụng Android & IOS."
                            />
                        </div>
                        <div className="w-full">
                            <CustomCollapse
                                title="Tính năng chính của MYS?"
                                desc="Xác lập, quản lý mục tiêu, người tham gia và dễ dàng theo dõi tiến độ, nhận thông báo mỗi khi có cập nhật, can thiệp kịp thời."
                            />
                            <CustomCollapse
                                title="Những ưu điểm của MYS?"
                                desc="Dễ sử dụng và tiện lợi, hỗ trợ trên mọi nền tảng, chi phí thấp, hiệu quả sử dụng cao và được hỗ trợ công nghệ AI"
                            />
                        </div>
                    </div>
                    <div className="hidden lg:block link-contact text-center">
                        <p className="not-italic text-[#505056] font-normal text-base leading-6">
                            Chưa thể giải đáp những thắc mắc?
                            <Link href="/about#contact">
                                <span className="not-italic text-[#007BFF] font-normal text-base leading-6">
                                    Liên hệ với chúng tôi
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </section>

            {/*  */}
            <div id="contact" className="h-16 lg:h-[5rem] xxl:h-[6.5rem]"></div>

            {/* Section 11 - Contact */}
            <section className="sectionEle max-w-[112rem] mx-auto">
                <div className="sectionEle-container flex flex-wrap md:flex-nowrap bg-[#F2FAFF] md:bg-white xl:w-[80%] px-[18px] lg:px-16 xl:px-18 items-center md:gap-8 gap-16 mx-auto pb-11 md:justify-center">
                    <div className="w-full md:w-[60%] xl:w-1/2 mx-auto max-w-fit">
                        <Image src={images.imgSection11} alt="Liên hệ hỗ trợ mys" />
                    </div>
                    <div className="w-full sm:w-10/12 xl:w-3/5 mx-auto">
                        <Form
                            name="contact"
                            // labelCol={{ span: 8 }}
                            // wrapperCol={{ span: 16 }}
                            style={{ maxWidth: 600 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            className="ant-form ant-form-horizontal cantact-form-container grid max-w-xl"
                        >
                            <div>
                                <h1 className="relative text-[#191D27] font-bold leading-[3.5rem] flex justify-center text-center lg:justify-start mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 text-xl sm:text-2xl md:text-3xl lg:text-4xl xxl:text-5xl z-10 ">
                                    Liên hệ với chúng tôi
                                    <GreenLine2 />
                                </h1>
                            </div>
                            <div className="flex gap-x-4">
                                <Form.Item<FieldType>
                                    name="fullname"
                                    validateTrigger="onBlur"
                                    rules={[{ required: true, message: 'Họ và tên không được để trống' }]}
                                >
                                    <Input placeholder="Họ và tên*" className={cx('input-contact')} />
                                </Form.Item>

                                <Form.Item<FieldType>
                                    name="phone"
                                    validateTrigger="onBlur"
                                    rules={[
                                        { required: true, message: 'Số điện thoại không được để trống' },
                                        { validator: validatePhone },
                                    ]}
                                >
                                    <Input placeholder="Số điện thoại*" className={cx('input-contact')} />
                                </Form.Item>
                            </div>

                            <Form.Item<FieldType>
                                name="email"
                                validateTrigger="onBlur"
                                rules={[
                                    { required: true, message: 'Email không được để trống' },
                                    {
                                        type: 'email',
                                        message: 'Please enter a valid email address!',
                                    },
                                ]}
                            >
                                <Input placeholder="Email*" className={cx('input-contact')} />
                            </Form.Item>

                            <FormItem<FieldType>
                                name="message"
                                validateTrigger="onBlur"
                                rules={[{ required: true, message: 'Lời nhắn không được để trống' }]}
                            >
                                <TextArea
                                    placeholder="Lời nhắn*"
                                    style={{
                                        overflowY: 'hidden',
                                        height: '98px',
                                        resize: 'none',
                                        minHeight: '98px',
                                        maxHeight: '120px',
                                        borderRadius: 0,
                                    }}
                                />
                            </FormItem>

                            <button
                                type="submit"
                                className="p-2 inline-flex items-center justify-center text-sm font-medium transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-[#1c7fff] px-3 w-[150px] h-9 md:w-[190px] md:h-[56px] rounded-2xl"
                            >
                                Gửi lời nhắn
                            </button>
                        </Form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div className={`${cx('footer')} relative overflow-hidden xl:mt-10 xxl:mt-12'`}>
                <Circle1 />
                <div
                    className={`${cx(
                        'footer-container',
                    )} overflow-hidden pt-7 sm:pt-8 md:pt-10 xl:pt-16 xxl:pt-20 xxl:mx-auto`}
                >
                    <div
                        className={`${cx(
                            'footer-content',
                        )} relative text-white grid grid-cols-1 sm:grid-cols-2 md:flex sm:gap-x-6 md:px-10 xl:px-14 pb-10 xl:pb-14 px-6`}
                    >
                        <Image
                            src={images.footerShape1}
                            alt="footer-shape"
                            className="absolute w-[5%] top-2/3 left-[8%] z-10"
                            color="transparent"
                        />
                        <Image
                            src={images.footerShape2}
                            alt="footer-shape"
                            className="absolute w-[10%] hidden md:block right-[8%] z-10"
                            color="transparent"
                        />
                        <Image
                            src={images.footerShape3}
                            alt="footer-shape"
                            className="absolute w-[30%] md:w-[8%] bottom-[5%] md:bottom-[12%] right-[-10%] md:right-[5%] z-0"
                            color="transparent"
                        />

                        {/* Contact */}
                        <div className={`text-content ${cx('contact')} pb-7`}>
                            <Link href="https://tinasoft.vn/" target="_blank">
                                <Image src={images.mysLogo} alt="MYS Logo" className={cx('logo-footer')} />
                            </Link>

                            {/* Mobile */}
                            <div className="border-b border-[#FF7825] mt-2.5 mb-4 md:hidden">
                                <h3
                                    className={`${cx('title')} py-2.5 text-white text-sm xxl:text-[25px] font-semibold`}
                                >
                                    Liên hệ
                                </h3>
                            </div>
                            <div className={`flex flex-col items-start ${cx('contact-body')} md:hidden`}>
                                <a
                                    className="cursor-pointer"
                                    href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=contact@tinasoft.vn"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Email: <span className={cx('contact-value')}>contact@tinasoft.vn</span>
                                </a>
                                <a href="tel:+(84) 246 329 5589">
                                    Phone number: <span className={cx('contact-value')}>+(84) 246 329 5589</span>
                                </a>
                                <p className="cursor-text">
                                    Office:{' '}
                                    <span className={cx('contact-value')}>
                                        Tầng 4, Tòa nhà Ellipse Tower, 110 Trần Phú, Hà Đông, Hà Nội
                                    </span>
                                </p>
                            </div>

                            {/* PC */}
                            <div className="hidden md:flex flex-col items-start opacity-[0.84] max-w-[19rem] ">
                                <a
                                    className="cursor-pointer"
                                    href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=contact@tinasoft.vn"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Email: <span>contact@tinasoft.vn</span>
                                </a>
                                <a href="tel:+(84) 246 329 5589">
                                    Số điện thoại: <span>+(84) 246 329 5589</span>
                                </a>
                                <p className="cursor-text">
                                    Địa chỉ văn phòng:{' '}
                                    <span> Tầng 4, Tòa nhà Ellipse Tower, 110 Trần Phú, Hà Đông, Hà Nội</span>
                                </p>
                            </div>
                        </div>

                        {/* Support */}
                        <div className={`${cx('product-services')} text-content pb-7 sm:pt-[50px]`}>
                            {/* Mobile */}
                            <div className="border-b border-[#FF7825] mb-4 md:hidden">
                                <h3
                                    className={`${cx('title')} py-2.5 text-white text-sm xxl:text-[25px] font-semibold`}
                                >
                                    Support
                                </h3>
                            </div>
                            <div className="flex justify-start items-start gap-14 md:gap-0">
                                <div className="w-full">
                                    <h3
                                        className={`text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl xxl:text-[25px] font-semibold xl:pb-8 ${cx(
                                            'title',
                                        )}`}
                                    >
                                        About MYS
                                    </h3>
                                    <ul className="grid">
                                        <li>
                                            <a href="/about-us">
                                                <p className="opacity-[0.84] hover:opacity-100">Giới thiệu</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/about#feature">
                                                <p className="opacity-[0.84] hover:opacity-100">Tính năng</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full">
                                    <h3
                                        className={`text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl xxl:text-[25px] font-semibold xl:pb-8 ${cx(
                                            'title',
                                        )}`}
                                    >
                                        Solution
                                    </h3>
                                    <ul className="grid">
                                        <li>
                                            <a href="/about#foratrial">
                                                <p className="opacity-[0.84] hover:opacity-100">Đăng ký dùng thử</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/faqs">
                                                <p className="opacity-[0.84] hover:opacity-100">Faqs</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/help">
                                                <p className="opacity-[0.84] hover:opacity-100">Help Center</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Download */}
                        <div className="dowloadapp text-content md:pt-[50px]">
                            {/* Mobile */}
                            <div className="border-b border-[#FF7825] mb-4 md:hidden">
                                <h3 className={`${cx('title')} py-2.5 text-sm xxl:text-[25px]`}>
                                    Trải nghiệm ứng dụng!
                                </h3>
                            </div>

                            {/* PC */}
                            <h3
                                className={`hidden md:flex ${cx(
                                    'title',
                                )} pb-2.5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl xxl:text-[25px] font-semibold xl:pb-8`}
                            >
                                Trải nghiệm ứng dụng!
                            </h3>
                            <div className="flex flex-row sm:flex-col gap-7 sm:gap-5">
                                <Button
                                    className={cx('btn-store')}
                                    target="_blank"
                                    href="https://apps.apple.com/us/app/tinamys/id6449159582"
                                >
                                    <Image alt="app store" src={images.appStoreFooter} />
                                    <span className="pl-3">App Store</span>
                                </Button>
                                <Button
                                    className={cx('btn-store')}
                                    target="_blank"
                                    href="https://play.google.com/store/apps/details?id=com.tinasoft.mys&pli=1"
                                >
                                    <Image alt="ch play" src={images.playStoreFooter} />
                                    <span className="pl-3">Play Store</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <hr className="w-full xl:w-10/12 mx-auto opacity-30" />

                    {/* Mobile */}
                    <div className="py-5 flex justify-center md:hidden">
                        <p className="text-[8px] font-light leading-[200%] text-white opacity-50 cursor-text">
                            © 2023 ALL RIGHTS RESERVED | TINASOFT VIỆT NAM
                        </p>
                    </div>
                    {/* PC */}
                    <div className="hidden md:flex justify-between py-2 xxl:py-6 text-white w-10/12 mx-auto">
                        <Link
                            className="opacity-[0.84] hover:opacity-100 hover:text-[#1890ff]"
                            href="https://tinasoft.vn/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            © 2023 TINASOFT VIỆT NAM
                        </Link>
                        <div className="flex items-center">
                            <p className="opacity-[0.84] hover:opacity-100 cursor-text">Privacy Policy</p>
                            <BlueDot />
                            <p className="opacity-[0.84] hover:opacity-100 cursor-text">Refund Policy</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigate Button Group */}
            <div className={cx('group-fab-ldp')}>
                <button className={cx('btn-fab')} type="button" onClick={() => scrollToSection('benefit')}>
                    <span className={cx('title-btn')}>ƯU ĐIỂM</span>
                    <StarOutlined className={cx('icon-fab')} style={{ fontSize: 18 }} />
                </button>
                <button className={cx('btn-fab')} type="button" onClick={() => scrollToSection('contact')}>
                    <span className={cx('title-btn')}>LIÊN HỆ</span>
                    <MailOutlined className={cx('icon-fab')} style={{ fontSize: 18 }} />
                </button>
                {showButton && (
                    <button className={cx('btn-fab')} type="button" onClick={() => scrollToSection('home')}>
                        <span className={cx('title-btn')}>ĐẦU TRANG</span>
                        <ArrowUpOutlined className={cx('icon-fab')} style={{ fontSize: 18 }} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default AboutPage;
