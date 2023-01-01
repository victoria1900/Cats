import React from 'react';
import {CssBaseline} from "@mui/material";
import Header from "../components/Header";
import {Outlet} from "react-router";

const Layout = () => {
    return (
        <>
            <CssBaseline/>
            <Header/>
            <div className={'container inner'}>
                <Outlet/>
            </div>
        </>
    );
};

export default Layout;