import React from 'react';
import Header from "../components/Header";
import {Outlet} from "react-router";

const Layout = () => {
    return (
        <>
            <Header/>
            <div className={'container inner'}>
                <Outlet/>
            </div>
        </>
    );
};

export default Layout;