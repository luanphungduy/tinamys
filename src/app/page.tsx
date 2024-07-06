'use client';

import React from 'react';
import AboutPage from './about/page';
import MainLayout from './(mainLayout)/layout';
import HomePage from './(mainLayout)/homepage/page';

type Props = {};

const Home = (props: Props) => {
    const tokenLogin = localStorage.getItem('accessToken');

    if (tokenLogin)
        return (
            <MainLayout>
                <HomePage />
            </MainLayout>
        );

    return <AboutPage />;
};

export default Home;
