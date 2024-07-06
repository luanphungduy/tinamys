import { get, post } from '@/utils/httpRequest';

export const loginService = async (email: string, password: string) => {
    try {
        const res = await post('/auth/login', {
            email,
            password,
        });
        return res;
    } catch (error: any) {
        console.log(error);
    }
};

export const logoutService = async () => {
    try {
        const res = await post(
            'auth/logOut',
            {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            },
        );
        return res;
    } catch (error: any) {
        console.log('errorLogout: ', error.message);
    }
};

export const registerService = async (email: string, password: string) => {
    try {
        const res = await post('/auth/register', {
            email,
            password,
        });
        return res;
    } catch (error: any) {
        console.log(error);
    }
};

export const verifyEmailService = async (email: string, otp: string) => {
    try {
        const res = await post('/auth/verify', {
            email,
            otp,
        });
        return res;
    } catch (error: any) {
        console.log(error);
    }
};

/*
https://65e7e2ce53d564627a8f6520.mockapi.io/:endpoint

 */
