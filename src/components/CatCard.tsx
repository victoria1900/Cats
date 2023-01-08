import React from 'react';
import {useAppDispatch, useAppSelector} from "../core/hooks/redux";
import {
    catsAddingToFavorite,
    catsRemovingFromFavorite,
    selectCatReducers,
} from "../core/store/reducers/CatSlice";

const CatCard = () => {
    const {cats, favorites} = useAppSelector(selectCatReducers);
    const dispatch = useAppDispatch();

    const addToFavorite = (id: string) => {
        if (favorites.includes(id)) {
            dispatch(catsRemovingFromFavorite(id));
            return;
        }
        dispatch(catsAddingToFavorite(id));
    }
    return (
        <>
            {cats.map(({id, url}) =>
                <div className={'item'} key={id}>
                    <img className={'img'} loading="lazy" src={url} alt="cat"/>
                    <button
                        className={favorites.includes(id) ? 'button checked-button' : 'button'}
                        onClick={() => addToFavorite(id)}>
                    </button>
                </div>
            )}
        </>
    );
};

export default CatCard;