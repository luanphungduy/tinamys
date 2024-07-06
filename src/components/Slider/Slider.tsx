'use client';

import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import images from '@/assets/images';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';
import NextImage from 'next/image';
import { Image } from 'antd';

type Props = {};

export const FeedbackSlider = (props: Props) => {
    const [width, setWidth] = useState<number>(710);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: '50px',
        slidesToShow: 1,
        speed: 500,
        variableWidth: true,
        dots: true,
    };

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            let newWidth;

            switch (true) {
                case windowWidth < 576:
                    newWidth = 246;
                    break;
                case windowWidth >= 576 && windowWidth < 993:
                    newWidth = 380;
                    break;
                case windowWidth >= 993 && windowWidth < 1200:
                    newWidth = 580;
                    break;
                default:
                    newWidth = 710;
            }

            setWidth(newWidth);
            setIsMobile(windowWidth < 1200);
        };

        handleResize(); // Xác định trạng thái ban đầu

        window.addEventListener('resize', handleResize); // Lắng nghe sự kiện resize

        return () => {
            window.removeEventListener('resize', handleResize); // Gỡ bỏ lắng nghe sự kiện khi component bị unmount
        };
    }, []);

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {/* Slide 1 */}
                <div
                    style={{ width: width }}
                    className={`pt-2.5 px-5 pb-2.5 md:pd-3.5 ${isMobile ? 'slide-content-mobile' : 'slide-content'}`}
                >
                    <div className="text-content">
                        <h2 className="not-italic text-center font-semibold text-[#101A29] text-base xl:text-lg xl:leading-6 xl:pt-[25px] pb-2 xl:pb-[9.5px]">
                            Chị Phạm Khánh Linh
                        </h2>
                        <h3 className="not-italic text-center font-semibold text-[#737588] text-xs xl:text-sm xl:leading-5 pb-2 xl:pb-[15.5px]">
                            Nhân viên kinh doanh
                        </h3>
                        <p className="not-italic text-center font-sembold text-[#63A5F1] leading-5 xl:leading-6 text-4xl xl:text-[42px]">
                            “
                        </p>
                        <p className="not-italic text-center font-normal text-xs xl:text-base xl:px-14 xl:mt-4 xl:leading-6 pb-8 lg:pb-9">
                            Tôi không bỏ lỡ bất cứ deadline nào nhờ MYS, hệ thống sẽ nhắc việc khi đến hạn hoặc quá hạn
                            nhờ đó mà vị trí bận rộn như tôi không bị lỡ mất bất cứ công việc quan trọng nào!
                        </p>
                    </div>
                    <div className="inline-block img-avatar">
                        <Image
                            alt="avatar-feedback-1"
                            className="rounded-full bg-white shadow-[#002147] w-12 xl:w-16 xl:mt-8 xl:p-2"
                            src={images.avtFeedback1.default.src}
                            preview={false}
                        />
                    </div>
                </div>

                {/* Slide 2 */}
                <div
                    style={{ width: width }}
                    className={`pt-2.5 px-5 pb-2.5 md:pd-3.5 ${isMobile ? 'slide-content-mobile' : 'slide-content'}`}
                >
                    <div className="text-content">
                        <h2 className="not-italic text-center font-semibold text-[#101A29] text-base xl:text-lg xl:leading-6 xl:pt-[25px] pb-2 xl:pb-[9.5px]">
                            Anh Lê Đắc Duy
                        </h2>
                        <h3 className="not-italic text-center font-semibold text-[#737588] text-xs xl:text-sm xl:leading-5 pb-2 xl:pb-[15.5px]">
                            Trưởng phòng Tài chính
                        </h3>
                        <p className="not-italic text-center font-sembold text-[#63A5F1] leading-5 xl:leading-6 text-4xl xl:text-[42px]">
                            “
                        </p>
                        <p className="not-italic text-center font-normal text-xs xl:text-base xl:px-14 xl:mt-4 xl:leading-6 pb-8 lg:pb-9">
                            Thực sự cảm ơn MYS, nhờ MYS tôi đã giảm thiểu tần suất họp báo cáo công việc hàng ngày và
                            hàng tuần rất nhiều, do tiến độ được cập nhật theo thời gian thực, tôi chỉ cần truy cập vào
                            ứng dụng là thấy được tất cả.
                        </p>
                    </div>
                    <div className="inline-block img-avatar">
                        <Image
                            alt="avatar-feedback-3"
                            className="rounded-full bg-white shadow-[#002147] w-12 xl:w-16 xl:mt-8 xl:p-2"
                            src={images.avtFeedback3.default.src}
                            preview={false}
                        />
                    </div>
                </div>

                {/* Slide 3 */}
                <div
                    style={{ width: width }}
                    className={`pt-2.5 px-5 pb-2.5 md:pd-3.5 ${isMobile ? 'slide-content-mobile' : 'slide-content'}`}
                >
                    <div className="text-content">
                        <h2 className="not-italic text-center font-semibold text-[#101A29] text-base xl:text-lg xl:leading-6 xl:pt-[25px] pb-2 xl:pb-[9.5px]">
                            Chị Nguyễn Thị Phương Thảo
                        </h2>
                        <h3 className="not-italic text-center font-semibold text-[#737588] text-xs xl:text-sm xl:leading-5 pb-2 xl:pb-[15.5px]">
                            CEO
                        </h3>
                        <p className="not-italic text-center font-sembold text-[#63A5F1] leading-5 xl:leading-6 text-4xl xl:text-[42px]">
                            “
                        </p>
                        <p className="not-italic text-center font-normal text-xs xl:text-base xl:px-14 xl:mt-4 xl:leading-6 pb-8 lg:pb-9">
                            Ứng dụng có giao diện thoáng, đẹp, dễ sử dụng. Các phòng ban ở công ty tôi từ kế toán, văn
                            thư đến kĩ thuật đều không gặp phải trở ngại gì trong cách dùng.
                        </p>
                    </div>
                    <div className="inline-block img-avatar">
                        <Image
                            alt="avatar-feedback-2"
                            className="rounded-full bg-white shadow-[#002147] w-12 xl:w-16 xl:mt-8 xl:p-2"
                            src={images.avtFeedback2.default.src}
                            preview={false}
                        />
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export const BenefitSlider = (props: Props) => {
    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: '50px',
        slidesToShow: 1,
        speed: 500,
        variableWidth: true,
        dots: true,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {/* Slide 1 */}
                <li style={{ width: 245 }} className="px-7 py-3 benefit-item">
                    <div className="flex">
                        <NextImage alt="" src={images.easy} className="mb-2" width={25} height={25} />
                    </div>
                    <div className="text-start">
                        <h3 className="pb-2 text-[#000001] font-medium text-base leading-6">
                            Dễ sử dụng và tiện lợi và tiết kiệm thời gian
                        </h3>
                        <p className="text-[#323232] pb-5 text-sm font-normal opacity-80 leading-5">
                            Giao diện đơn giản và thân thiện, giúp người dùng dễ dàng sử dụng và tiết kiệm thời gian
                        </p>
                    </div>
                </li>

                {/* Slide 2 */}
                <li style={{ width: 245 }} className="px-7 py-3 benefit-item">
                    <div className="flex">
                        <NextImage alt="" src={images.smartphone} className="mb-2" width={25} height={25} />
                    </div>
                    <div className="text-start">
                        <h3 className="pb-2 text-[#000001] font-medium text-base leading-6">Hỗ trợ đa nền tảng</h3>
                        <p className="text-[#323232] pb-5 text-sm font-normal opacity-80 leading-5">
                            Ứng dụng hiện có mặt trên iOS, Android và Website
                        </p>
                    </div>
                </li>

                {/* Slide 3 */}
                <li style={{ width: 245 }} className="px-7 py-3 benefit-item">
                    <div className="flex">
                        <NextImage alt="" src={images.reduceCost} className="mb-2" width={25} height={25} />
                    </div>
                    <div className="text-start">
                        <h3 className="pb-2 text-[#000001] font-medium text-base leading-6">Chi phí thấp</h3>
                        <p className="text-[#323232] pb-5 text-sm font-normal opacity-80 leading-5">
                            Cho phép người dùng sử dụng miễn phí các tính năng cơ bản
                        </p>
                    </div>
                </li>
                {/* Slide 4 */}
                <li style={{ width: 245 }} className="px-7 py-3 benefit-item">
                    <div className="flex">
                        <NextImage alt="" src={images.target} className="mb-2" width={25} height={25} />
                    </div>
                    <div className="text-start">
                        <h3 className="pb-2 text-[#000001] font-medium text-base leading-6">Hiệu quả</h3>
                        <p className="text-[#323232] pb-5 text-sm font-normal opacity-80 leading-5">
                            Giúp tăng hiệu suất công việc và đưa ra quyết định chính xác
                        </p>
                    </div>
                </li>

                {/* Slide 5 */}
                <li style={{ width: 245 }} className="px-7 py-3 benefit-item">
                    <div className="flex">
                        <NextImage alt="" src={images.ai} className="mb-2" width={25} height={25} />
                    </div>
                    <div className="text-start">
                        <h3 className="pb-2 text-[#000001] font-medium text-base leading-6">Hỗ trợ công nghệ AI</h3>
                        <p className="text-[#323232] pb-5 text-sm font-normal opacity-80 leading-5">
                            Người dùng sử dụng ứng dụng được hỗ trợ bởi công nghệ thông minh AI
                        </p>
                    </div>
                </li>
            </Slider>
        </div>
    );
};
