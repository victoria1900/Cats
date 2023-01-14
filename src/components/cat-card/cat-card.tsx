import React, {FC} from 'react';
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {
    catsAddingToFavorite,
    catsRemovingFromFavorite,
    selectCatReducers,
} from "../../core/store/reducers/cat-slice";
import {ICatCardProps} from "../../core/types/cat";
import './style.scss';
import {useAppDispatch} from "../../core/hooks/use-app-dispatch";

const CatCard: FC<ICatCardProps> = ({cat}) => {
    const {url, id} = cat;
    const {favorites} = useAppSelector(selectCatReducers);
    const dispatch = useAppDispatch();
    const isInFavorites = favorites.find(favorite => favorite.id === id);

    const addToFavorite = () => {
        dispatch(catsAddingToFavorite({id: id, url: url}));
        favorites.forEach(favorite => {
            if (favorite.id === id) {
                dispatch(catsRemovingFromFavorite(id));
            }
        })
    }

    return (
        <div className={'cat-item'}>
            <img className={'cat-img'} loading="lazy" src={url} alt="cat"/>
            <button
                className={!isInFavorites ? 'cat-button' : 'cat-button checked-button'}
                onClick={addToFavorite}>
            </button>
        </div>
    );
};

export default CatCard;