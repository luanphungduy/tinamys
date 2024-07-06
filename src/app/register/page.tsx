'use client';

// import { Formik } from 'formik';
import { Form, Input, Row } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { registerService } from '@/services/authService';
import images from '@/assets/images';
import './RegisterPage.css';
import useStore from '@/hooks/userHook';

type Props = {};

type FieldType = {
    fullname?: string;
    username?: string;
    email?: string;
    password?: string;
};

const RegisterPage = (props: Props) => {
    const router = useRouter();

    // Submit form
    const onFinish = async (values: any) => {
        try {
            const res = await registerService(values.email, values.password);
            setEmail(values.email);
            if (res) {
                console.log('Đăng ký thành công', res);
            }
            router.push('/verify-email');
        } catch (error) {
            console.log('Đăng ký thất bại:', error);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    // const userEmail = useStore((state) => state.email);
    const setEmail = useStore((state) => state.setEmail);
    // console.log(userEmail);

    return (
        <div className="container-login relative">
            <div className="form-container">
                <div className="form">
                    <div className="container-login">
                        <div className="flex justify-evenly gap-x-32">
                            <Form
                                layout="horizontal"
                                className="container-form-login"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <div className="header-wrapper">
                                    <div className="login-text mb-8">ĐĂNG KÝ</div>
                                </div>

                                <div className="form-item-custom">
                                    <div className="title">
                                        Họ và tên<b className="text-orange-300">*</b>
                                    </div>
                                    <Form.Item<FieldType>
                                        name="fullname"
                                        validateTrigger="onBlur"
                                        rules={[{ required: true, message: 'Họ và tên không được để trống' }]}
                                    >
                                        <Input placeholder="Họ và tên" className="input-formik-global undefined" />
                                    </Form.Item>
                                </div>

                                <div className="form-item-custom">
                                    <div className="title">Tên tài khoản</div>
                                    <Form.Item<FieldType>
                                        name="username"
                                        // validateTrigger="onBlur"
                                        // rules={[{ required: true, message: 'Tên tài khoản không được để trống' }]}
                                    >
                                        <Input placeholder="Tên tài khoản" className="input-formik-global undefined" />
                                    </Form.Item>
                                </div>

                                <div className="form-item-custom">
                                    <div className="title">
                                        Email<b className="text-orange-300">*</b>
                                    </div>
                                    <Form.Item<FieldType>
                                        name="email"
                                        validateTrigger="onBlur"
                                        rules={[{ required: true, message: 'Email không được để trống' }]}
                                    >
                                        <Input placeholder="Email" className="input-formik-global undefined" />
                                    </Form.Item>
                                </div>

                                <div className="form-item-custom">
                                    <div className="title">
                                        Mật khẩu<b className="text-orange-300">*</b>
                                    </div>

                                    <Form.Item<FieldType>
                                        name="password"
                                        validateTrigger="onBlur"
                                        rules={[
                                            { required: true, message: 'Mật khẩu không được để trống' },
                                            // { min: 6 },
                                        ]}
                                    >
                                        <Input.Password
                                            placeholder="Mật khẩu"
                                            className="input-formik-global undefined"
                                        />
                                    </Form.Item>
                                </div>

                                {/* <div className="form-item-custom">
                                    <div className="title">
                                        Nhập lại mật khẩu<b className="text-orange-300">*</b>
                                    </div>

                                    <Form.Item<FieldType>
                                        name="password"
                                        validateTrigger="onBlur"
                                        rules={[
                                            { required: true, message: 'Mật khẩu nhập lại không được để trống' },
                                            // { min: 6 },
                                        ]}
                                    >
                                        <Input.Password
                                            placeholder="Nhập lại mật khẩu"
                                            className="input-formik-global undefined"
                                        />
                                    </Form.Item>
                                </div> */}

                                <button
                                    className="p-2 inline-flex items-center justify-center rounded-md transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-[#2082ff] font-semibold text-base h-11 w-full mb-1.2"
                                    type="submit"
                                >
                                    Đăng ký
                                </button>

                                <Row className="flex justify-center mt-4">
                                    <div className="text-res">Bạn đã có tài khoản?</div>
                                    <Link href="/login" className="text-router-register">
                                        Đăng nhập ngay
                                    </Link>
                                </Row>
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
