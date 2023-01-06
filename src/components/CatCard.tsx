import React, {useState} from 'react';
import {nanoid} from "@reduxjs/toolkit";
import {useAppSelector} from "../core/hooks/redux";

const CatCard = () => {
    const {cats} = useAppSelector(state => state.catReducer);
    const [favorite, setFavorite] = useState(false);

    return (
        <>
            {cats.map(cat =>
                <div className={'item'} key={nanoid(10)}>
                    <img className={'img'} loading="lazy" src={cat.url} alt="cat"/>
                    <button className={favorite ? 'button checked-button' : 'button'}></button>
                </div>
            )}
        </>
    );
};

export default CatCard;