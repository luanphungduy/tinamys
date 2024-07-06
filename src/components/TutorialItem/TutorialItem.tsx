import React from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './TutorialItem.module.scss';

type Props = {
    title: string;
    img: string;
};

const cx = classNames.bind(styles);

const TutorialItem = (props: Props) => {
    return (
        <div className="w-[280px]">
            <button type="button" className="item-youtube transition duration-300 hover:scale-[1.05]">
                <Image
                    alt=""
                    src={props.img}
                    style={{ height: 185, width: 280 }}
                    className="object-contain cursor-pointer"
                />
            </button>
            <div className="py-3">
                <p className={cx('title-video')}>
                    <span>{props.title}</span>
                </p>
                <div className="flex justify-between items-center pt-2">
                    <h3 className={cx('sub-title')}>TinaMYS</h3>
                </div>
            </div>
            <button type="button" className={cx('btn-tutorial')}>
                Xem
            </button>
        </div>
    );
};

export default TutorialItem;
