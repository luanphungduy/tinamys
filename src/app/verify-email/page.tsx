'use client';

// import { Formik } from 'formik';
import { Form, Input, Row, Statistic } from 'antd';
import type { CountdownProps } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { verifyEmailService } from '@/services/authService';
import images from '@/assets/images';
import './VerifyEmailPage.css';
import useStore from '@/hooks/userHook';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

type Props = {};

type FieldType = {
    otp?: string;
};

const RegisterPage = (props: Props) => {
    const router = useRouter();

    // Submit form
    const onSubmitForm = async (values: any) => {
        try {
            const res = await verifyEmailService(emailRegister, values.otp);
            if (!res.result) {
                console.log('Sai OTP:', res);
                toast.error('Sai Otp');
            } else {
                console.log('Xác thực OTP thành công:', res);
                router.push('/login');
            }
        } catch (error) {
            console.log('Đăng ký thất bại:', error);
        }
    };

    const onSubmitFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const emailRegister = useStore((state) => state.email);

    // Handle Countdown OTP time
    const { Countdown } = Statistic;

    const deadline = Date.now() + 5 * 60 * 1000; // Dayjs is also OK

    const onFinishCountdown: CountdownProps['onFinish'] = () => {
        console.log('finished!');
    };

    return (
        <div className="container-login relative">
            <div className="form-container">
                <div className="form">
                    <div className="container-login">
                        <div className="flex justify-evenly gap-x-32">
                            <Form
                                layout="horizontal"
                                className="container-form-login"
                                onFinish={onSubmitForm}
                                onFinishFailed={onSubmitFailed}
                                autoComplete="off"
                            >
                                <div className="header-wrapper">
                                    <div className="login-text">Nhập mã OTP</div>
                                    <p className="login-description">
                                        <span>Chúng tôi vừa gửi mã xác minh gồm 4 chữ số đến email:</span>
                                        <span className="email"> {emailRegister}</span>
                                    </p>
                                </div>

                                <div className="form-item-custom">
                                    <div className="title">
                                        Nhập mã OTP<b className="text-orange-300">*</b>
                                    </div>
                                    <Form.Item<FieldType>
                                        name="otp"
                                        // validateTrigger="onBlur"
                                        // rules={[{ required: true, message: 'Họ và tên không được để trống' }]}
                                    >
                                        <Input placeholder="Nhập mã OTP" className="input-formik-global undefined" />
                                    </Form.Item>
                                </div>

                                <Row className="flex justify-center">
                                    <Countdown format="mm:ss" value={deadline} onFinish={onFinishCountdown} />
                                </Row>

                                <Row className="flex justify-center text-center mt-1 mb-4">
                                    <div className="text-res">Bạn chưa nhận được mã OTP?</div>
                                    <span
                                        role="button"
                                        tabIndex={0}
                                        className="cursor-pointer text-center text-[14px] ml-2"
                                        style={{ color: 'blue' }}
                                    >
                                        Gửi lại OTP
                                    </span>
                                </Row>

                                <button
                                    className="p-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-[#1c7fff] h-11 w-full"
                                    type="submit"
                                >
                                    Tiếp theo
                                </button>
                            </Form>
                            <div className="text-title">
                                Mapping Your <br></br> Success
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute left-0 bottom-7 pl-5 pr-5 text-blue-400 w-full text-base flex justify-between">
                <Link href="https://tinasoft.vn/">Powered by Tinasoft</Link>
                <Link href="https://tinasoft.vn/">© 2023 TINASOFT VIỆT NAM</Link>
            </div>
            <div className="absolute top-4 right-4">
                <Link href="/about">
                    <Image alt="logoMYS" src={images.mysLogo} width={100} height={44} />
                </Link>
            </div>
        </div>
    );
};

export default RegisterPage;
