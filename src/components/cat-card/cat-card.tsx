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
        if (favorites.some(favorite => favorite.id === id)) {
            dispatch(catsRemovingFromFavorite(id));
        }
    }

    return (
        <li className={'cat-item'}>
            <img className={'cat-img'} loading="lazy" src={url} alt={`cat ${id}`}/>
            <button
                className={`cat-button ${isInFavorites ? 'checked-button' : ''}`}
                onClick={addToFavorite}
                aria-label={`add cat ${id} to favorites`}
            >
            </button>
        </li>
    );
};

export default CatCard;