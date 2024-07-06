'use client';

import React from 'react';
import Image from 'next/image';
import images from '@/assets/images';
import classNames from 'classnames/bind';
import styles from './NoCompany.module.scss';

const cx = classNames.bind(styles);

type Props = {};

const NoCompany = (props: Props) => {
    return (
        <div className={cx('no-company')}>
            <Image alt="bot" src={images.bot} style={{ width: 160, height: 180 }} priority />
            <div className="ml-7 pt-5">
                <div className={`${cx('title__no-comapny')} mt-5`}>
                    Trang chủ của bạn đang được theo dõi và cập nhật
                </div>
                <div className={`${cx('des__no-comapny')} mt-3`}>
                    Khi các thành viên ở các không gian làm việc để lại bình luận hay thả cảm xúc vào bảng công việc,
                    tiến độ dự án hay các hoạt động quan trọng trọng khác sẽ được hiện thị ở đây.
                </div>
            </div>
        </div>
    );
};

export default NoCompany;
