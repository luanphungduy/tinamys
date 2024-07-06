import React from 'react';
import { Collapse } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import './Collapse.css';

interface CollapseProps {
    title: string;
    desc: string;
}

const CustomCollapse: React.FC<CollapseProps> = ({ title, desc }) => (
    <Collapse
        items={[
            {
                key: '1',
                label: (
                    <div className="text-question font-bold text-[18px] not-italic leading-[1.125rem] text-[#0E1133]">
                        {title}
                    </div>
                ),
                children: (
                    <p className="text-answer not-italic font-normal text-sm leading-[1.625rem] text-[#505056]">
                        {desc}
                    </p>
                ),
            },
        ]}
        bordered={false}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
            <RightOutlined
                style={
                    isActive
                        ? { color: 'white', backgroundColor: 'rgb(42, 109, 245)', borderRadius: '50%' }
                        : { color: 'blue', backgroundColor: 'rgb(238, 244, 254)', borderRadius: '50%' }
                }
                rotate={isActive ? 90 : 0}
            />
        )}
        style={{ backgroundColor: 'white' }}
    />
);

export default CustomCollapse;
