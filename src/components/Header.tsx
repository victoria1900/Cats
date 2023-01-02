import React from 'react';
import '../styles/App.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={'menu'}>
            <div className={'menu-wrap container'}>
                <Link to={'/'} className={'menu-item font-type'}>Cats list</Link>
                <Link to={'favorite-cats'} className={'menu-item font-type'}>Favorite cats</Link>
            </div>
        </div>
    );
};

export default Header;