import React from 'react';
import classNames from 'classnames/bind';
import styles from './LineDraw.module.scss';

const cx = classNames.bind(styles);

export const ThreeRays = () => {
    return (
        <svg width="80%" height="80%" viewBox="0 0 62 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                className={cx('lineCircle')}
                strokeWidth="1.69062"
                strokeLinecap="round"
                d="M20.694 62.3197C14.8739 60.6864 8.7803 59.8625 2.86918 59.1077C1.59601 58.9495 0.413967 59.8326 0.323026 61.0766C0.141145 62.3216 1.05108 63.4601 2.2333 63.6183C7.96255 64.3449 13.8731 65.1226 19.4206 66.6949C20.6028 67.0358 21.8765 66.3339 22.2402 65.1262C22.6039 63.9194 21.8762 62.6616 20.694 62.3197Z"
                stroke="#FF5F55"
            ></path>
            <path
                className={cx('lineCircle')}
                strokeWidth="1.69062"
                strokeLinecap="round"
                d="M38.3352 39.1642C28.9683 29.6055 18.4193 21.2772 9.23422 11.462C8.41575 10.5453 6.9607 10.4962 6.0513 11.352C5.14189 12.2086 5.05131 13.6491 5.96071 14.5658C15.1457 24.4091 25.6948 32.7648 35.0617 42.3518C35.9712 43.2466 37.4258 43.2593 38.3352 42.3789C39.1537 41.4996 39.2446 40.0592 38.3352 39.1642Z"
                stroke="#FF5F55"
            ></path>
            <path
                className={cx('lineCircle')}
                strokeWidth="1.69062"
                strokeLinecap="round"
                d="M55.8886 2.39698C56.1614 7.86795 56.4336 13.3389 56.7065 18.8108C56.7065 20.064 57.7983 21.0316 59.0715 20.9706C60.3446 20.9088 61.2535 19.8421 61.2535 18.588C60.9807 13.1079 60.7083 7.62877 60.4356 2.14962C60.3446 0.896452 59.2532 -0.0647889 57.9801 0.00341648C56.7977 0.0716218 55.7976 1.14472 55.8886 2.39698Z"
                stroke="#FF5F55"
            ></path>
        </svg>
    );
};

export const OrangeArrow = () => {
    return (
        <svg
            width="13%"
            height="10%"
            viewBox="0 0 86 86"
            className="hidden lg:inline-block absolute -bottom-[8%] -left-1/4 z-10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M67.5901 57.6732L41.7803 85.7443L38.5969 47.2789L64.4067 19.2077L67.5901 57.6732Z"
                fill="#f37726"
            ></path>
            <path
                d="M38.5974 47.2789L64.4072 19.2077L25.8103 19.2586L0.000451041 47.3297L38.5974 47.2789Z"
                fill="#f37726"
            ></path>
        </svg>
    );
};

interface StyleProps {
    style?: React.CSSProperties;
}

export const PinkLine: React.FC<StyleProps> = ({ style }) => {
    return (
        <svg
            style={style}
            width="180px"
            height="230px"
            viewBox="0 0 296 197"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className={cx('line')}
                d="M2.39893 60.9506C4.16683 54.8839 4.51647 48.2074 7.70264 42.7504C17.2995 26.3138 31.1018 20.4503 48.4017 13.8871C69.4425 5.90452 93.8513 0.816731 116.513 3.00044C142.012 5.45767 169.71 17.2816 188.085 35.2694C199.825 46.7623 208.47 62.611 209.746 79.1507C210.84 93.3161 206.574 101.347 196.682 110.415C191.169 115.469 208.872 101.66 215.497 98.1882C231.179 89.9685 254.331 83.1748 270.99 92.9403C288.85 103.41 288.604 132.785 285.171 150.22C282.844 162.036 277.406 173.306 269.706 182.545"
                stroke="#FD319E"
                strokeWidth="3"
                strokeLinecap="round"
            ></path>
            <path
                className={cx('arrowLine')}
                d="M260.507 177.446C262.159 183.143 263.176 188.857 264.351 194.662"
                stroke="#FD319E"
                strokeWidth="3"
                strokeLinecap="round"
            ></path>
            <path
                className={cx('arrowLine')}
                d="M264.017 194.829C269.995 192.267 276.534 190.849 282.738 188.979"
                stroke="#FD319E"
                strokeWidth="3"
                strokeLinecap="round"
            ></path>
        </svg>
    );
};

export const GreenLine1 = () => {
    return (
        <svg width="140px" height="160px" viewBox="0 0 181 169" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                className={cx('lineGreenCircle')}
                d="M176.5 16.8031C187 51.5 171.646 60.7893 155.701 66.3031C140.274 67.8169 130.726 68.0348 110.701 66.3031C101.334 65.6499 96.3342 65.4112 77.2013 59.8031C64.8166 53.9343 59.3993 50.8962 54.7013 46.3031C45.7938 34.6432 42.8911 27.6899 50.2013 12.8031C59.1955 1.56931 66.067 -0.417149 80.7013 1.80307C96.4772 6.41586 100.474 10.1144 107.201 16.8031C111.634 27.2472 120.27 35.5732 115.5 51.5C111.436 66.2491 108.74 71.2081 102.201 81.3031C94.0929 94.1934 89.5035 99.5284 80.7013 108.5C71.8991 117.472 71.8505 119.669 64.5 123.303C51.4896 132.959 39.943 134.42 28.5 131C23.7987 132.251 10.1649 128.806 6.70131 123.303C1.68038 113.125 1.85283 109.014 6.70131 104.303C15.2617 97.9011 26.2013 104.303 26.2013 104.303C26.2013 104.303 36.0763 111.693 37.7013 118.303C42.7083 126.614 35.7024 140.803 35.7024 140.803C35.7024 140.803 25.9704 155.751 26.2013 156.303L17.5 161.5L6.70131 164.5"
                stroke="#61CB8C"
                strokeWidth="2.5"
            ></path>
            <path
                className={cx('arrowLineGreenCircle')}
                d="M4 157L1 168.5H11.5H16"
                stroke="#61CB8C"
                strokeWidth="2.5"
            ></path>
        </svg>
    );
};

export const GreenLine2 = () => {
    return (
        <svg
            className="absolute -bottom-[22%] -z-10"
            width="228"
            height="16"
            viewBox="0 0 228 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.97461 12.9513C56.6422 4.19511 151.592 -1.43388 224.869 8.57321"
                stroke="#08F2C5"
                strokeWidth="5.54249"
                strokeLinecap="round"
            ></path>
        </svg>
    );
};

export const RedLine = () => {
    return (
        <svg width="110%" height="110%" viewBox="0 0 296 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                className={cx('lineCircle')}
                d="M123.477 56.5914C47.3723 64.5971 -12.4993 43.7699 4.85737 27.8086C26.5533 7.85694 230.104 -10.2483 280.993 12.2282C355.842 45.2872 99.9566 92.2446 15.646 54.0127"
                stroke="#FF5F55"
                strokeWidth="2"
                strokeLinecap="round"
            ></path>
        </svg>
    );
};

export const Circle1 = () => {
    return (
        <svg
            width="100%"
            height="100%"
            className="absolute top-[-48%] right-[-5%] md:left-[-4%] z-0 w-[24%]"
            viewBox="0 0 338 338"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="168.891" cy="168.685" r="168.574" fill="#ffffff1a"></circle>
        </svg>
    );
};

export const BlueDot = () => {
    return (
        <svg
            width="6px"
            height="100%"
            className="mx-6"
            viewBox="0 0 338 338"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="168.891" cy="168.685" r="168.574" fill="#2B59FF"></circle>
        </svg>
    );
};
