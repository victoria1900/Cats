import React from 'react';
import {useAppDispatch, useAppSelector} from "../core/hooks/redux";
import {catsAddingToFavorite, catsRemovingFromFavorite, selectCatReducers} from "../core/store/reducers/CatSlice";

const FavoriteCats = () => {
    const {favorites} = useAppSelector(selectCatReducers);
    const dispatch = useAppDispatch();

    const addToFavorite = (id: string) => {
        if (favorites.includes(id)) {
            dispatch(catsRemovingFromFavorite(id));
            return;
        }
        dispatch(catsAddingToFavorite(id));
    }
    return (
        <div className={'list'}>
            {favorites.map(id =>
                <div className={'item'} key={id}>
                    <img className={'img'} loading="lazy" src={`https://cdn2.thecatapi.com/images/${id}.jpg`}
                         alt="cat"/>
                    <button
                        className={favorites.includes(id) ? 'button checked-button' : 'button'}
                        onClick={() => addToFavorite(id)}>
                    </button>
                </div>
            )}
        </div>
    );
};

export default FavoriteCats;