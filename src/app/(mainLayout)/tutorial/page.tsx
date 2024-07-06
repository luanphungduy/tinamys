'use client';

import React from 'react';
import { Pagination } from 'antd';
import classNames from 'classnames/bind';
import styles from './Tutorial.module.scss';
import TutorialItem from '@/components/TutorialItem/TutorialItem';
import images from '@/assets/images';

type Props = {};

const cx = classNames.bind(styles);

const page = (props: Props) => {
    return (
        <div className={cx('tutorial')}>
            <div className="inline-block">
                <h3 className={cx('tutorial-title')}>Danh sách video hướng dẫn</h3>
            </div>
            <div className="flex flex-wrap tutorial-content gap-[30px] mt-8">
                <TutorialItem title="Hướng dẫn tạo Workspace" img={images.workspaceTutorial} />
                <TutorialItem title="Hướng dẫn tạo nhóm" img={images.groupTutorial} />
                <TutorialItem title="Hướng dẫn tạo chức vụ" img={images.positionTutorial} />
            </div>
            <div className="absolute bottom-[5%] right-[5%]">
                <Pagination defaultCurrent={1} total={1} />
            </div>
        </div>
    );
};

export default page;
