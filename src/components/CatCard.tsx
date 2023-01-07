import React from 'react';
import {useAppSelector} from "../core/hooks/redux";

const CatCard = () => {
    const {cats} = useAppSelector(state => state.catReducer);

    const addToFavorite = (id: string) => {
        const arr: any = [];
        if (arr.length === 0) {
            return [...arr, id];
        }
        if (arr.includes(id)) {
            return cats.filter(cat => cat.id !== id);
        }

        return [...arr, id];
    }

    return (
        <>
            {cats.map(cat =>
                <div className={'item'} key={cat.id}>
                    <img className={'img'} loading="lazy" src={cat.url} alt="cat"/>
                    <button className={'button'} onClick={() => addToFavorite(cat.id)}></button>
                </div>
            )}
        </>
    );
};

export default CatCard;