'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';
import images from '@/assets/images';
import { PhoneIcon } from '@/components/Icons/Icons';
import styles from './NavbarAbout.module.scss';
import { Button } from 'antd';

const cx = classNames.bind(styles);

type Props = {};

const NavbarAbout = (props: Props) => {
    const tokenLogin = localStorage.getItem('accessToken');

    return (
        <div className={cx('navbar-about')}>
            <div className={cx('navbar-container')}>
                <Link href="/" className="lg:ml-16">
                    <Image src={images.mysLogo} alt="MYS Logo" />
                </Link>

                <div className="items-center flex mr-4 sm:mr-0">
                    <div className="sm:flex gap-1.5 hidden">
                        <Link target="_blank" href={'https://apps.apple.com/us/app/tinamys/id6449159582'}>
                            <Image src={images.appStore} alt="MYS App Store" className="w-[5.8rem] h-[32px]" />
                        </Link>

                        <Link target="_blank" href={'https://apps.apple.com/us/app/tinamys/id6449159582'}>
                            <Image src={images.chPlay} alt="MYS App Store" className="w-[5.8rem] h-[32px]" />
                        </Link>
                    </div>
                    <Link href={tokenLogin ? '/' : '/login'} className="sm:flex hidden">
                        <button
                            type="button"
                            className="p-2 inline-flex items-center justify-center font-medium transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed bg-[#1c7fff] h-[28.5px] ml-2.5 px-5 rounded-[4px] text-white text-xs"
                        >
                            Trải nghiệm
                        </button>
                    </Link>
                    <div className="sm:flex hidden items-center mx-4 ">
                        <PhoneIcon />
                        <div className={`flex flex-col justify-start ml-3 ${cx('text-contact')}`}>
                            <p>Liên hệ với chúng tôi</p>
                            <p>+(84) 246 329 5589</p>
                        </div>
                    </div>
                    <Image src={images.vietNamFlag} alt="Vietnam Flag" className="w-[38px]" />
                </div>
            </div>
        </div>
    );
};

export default NavbarAbout;
