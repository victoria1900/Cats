import React, {FC} from 'react';
import Header from "../../components/header/header";
import {Outlet} from "react-router";

const Layout: FC = () => {
    return (
        <>
            <Header/>
            <div className={'container'}>
                <Outlet/>
            </div>
        </>
    );
};

export default Layout;