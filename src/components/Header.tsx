import React from 'react';
import '../styles/index.scss';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={'menu'}>
            <div className={'menu-wrap container'}>
                <Link to={'/'} className={'menu-item'}>Cat list</Link>
                <Link to={'favorite-cats'} className={'menu-item'}>Favorite cats</Link>
            </div>
        </div>
    );
};

export default Header;