import React, {FC} from 'react';
import Header from "../../components/header/header";
import {Outlet} from "react-router";
import './style.scss';

const Layout: FC = () => {
    return (
        <>
            <Header/>
            <section className={'container'}>
                <div className={'cat-section'}>
                    <Outlet/>
                </div>
            </section>
        </>
    );
};

export default Layout;