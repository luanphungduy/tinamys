'use client';

// import { Formik } from 'formik';
import { Form, Input, Row } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { loginService } from '@/services/authService';
import images from '@/assets/images';
import './LoginPage.css';

type Props = {};

type FieldType = {
    username?: string;
    password?: string;
};

const LoginPage = (props: Props) => {
    const router = useRouter();

    // Submit form
    const onFinish = async (values: any) => {
        try {
            const res = await loginService(values.username, values.password);
            if (res) {
                console.log('Đăng nhập thành công', res);
                localStorage.setItem('accessToken', res.result.accessToken);
                if (localStorage.getItem('accessToken')) {
                    // router.push('/homepage');
                    router.push('/');
                }
            }
        } catch (error) {
            console.log('Đăng nhập thất bại:', error);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
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
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <div className="header-wrapper">
                                    <div className="login-text">Đăng nhập</div>
                                    <p className="login-description">Hoàn thành các thông tin chi tiết dưới đây</p>
                                </div>
                                <div className="form-item-custom">
                                    <div className="title">Email hoặc tên tài khoản</div>
                                    <Form.Item<FieldType>
                                        name="username"
                                        validateTrigger="onBlur"
                                        rules={[
                                            { required: true, message: 'Email hoặc tên tài khoản không được để trống' },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Email hoặc tên tài khoản"
                                            className="input-formik-global undefined"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-item-custom">
                                    <div className="title">Mật khẩu</div>

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
                                <div className="flex items-center justify-between xxxl:mb-2 float-right">
                                    <div role="button" tabIndex={0} className="forgot-pass">
                                        Quên mật khẩu?
                                    </div>
                                </div>
                                <button
                                    className="p-2 inline-flex items-center justify-center rounded-md transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-[#2082ff] font-semibold text-base h-11 w-full mb-1.2"
                                    type="submit"
                                >
                                    Đăng nhập
                                </button>
                                <button type="button" className="btn-login-social">
                                    <Image alt="google" src={images.iconGoogle} />
                                    <div className="ml-2">Đăng nhập với Google</div>
                                </button>
                                <button type="button" className="btn-login-social">
                                    <Image alt="facebook" src={images.iconFacebook} />
                                    <div className="ml-2">Đăng nhập với Facebook</div>
                                </button>
                                <Row className="flex justify-center mt-4">
                                    <div className="text-res">Bạn chưa có tài khoản?</div>
                                    <Link href="/register" className="text-router-register">
                                        Đăng ký ngay
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

export default LoginPage;
