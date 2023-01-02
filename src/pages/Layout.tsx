import React from 'react';
import {CssBaseline} from "@mui/material";
import Header from "../components/Header";
import {Outlet} from "react-router";

const Layout = () => {
    return (
        <div>
            <CssBaseline/>
            <Header/>
            <div className={'container inner'}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;