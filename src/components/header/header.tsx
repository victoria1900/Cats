import React, {FC} from 'react';
import '../../styles/index.scss';
import {Link} from "react-router-dom";
import './style.scss';

const Header: FC = () => {
    return (
        <nav className={'menu'}>
            <ul className={'menu-wrap container'}>
                <li className={'menu-item'}>
                    <Link to={'/'} className={'menu-link'}>Cat list</Link>
                </li>
                <li className={'menu-item'}>
                    <Link to={'favorite-cats'} className={'menu-link'}>Favorite cats</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;