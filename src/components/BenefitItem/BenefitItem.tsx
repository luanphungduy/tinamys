import React from 'react';
import Image from 'next/image';

type Props = {
    src: string;
    title: string;
    desc: string;
};

const BenefitItem = ({ src, title, desc }: Props) => {
    return (
        <li className="hover:scale-105 duration-300 p-10 rounded-[20px] bg-white shadow-[0_8px_16px_0_rgba(146,152,198,.08)]">
            <div className="flex">
                <Image alt="" src={src} className="pb-5" style={{ color: 'transparent' }} width={48} height={48} />
            </div>
            <div className="item-title">
                <h3 className="pb-2 md:pb-3 xl:pb-4 text-[#000001] font-medium text-base md:text-lg lg:text-xl xl:text-2xl leading-8">
                    {title}
                </h3>
                <p className="text-[#323232] pb-7 text-sm lg:text-base font-medium opacity-80 leading-6">{desc}</p>
            </div>
        </li>
    );
};

export default BenefitItem;
