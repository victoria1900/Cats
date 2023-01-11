import React from 'react';
import {useAppSelector} from "../../core/hooks/redux";
import {selectCatReducers} from "../../core/store/reducers/cat-slice";
import CatCard from "../../components/cat-card/cat-card";

const FavoriteCats = () => {
    const {favorites} = useAppSelector(selectCatReducers);

    return (
        <div className={'list'}>
            {favorites.map(favorite =>
                <CatCard key={favorite.id} cat={favorite}/>
            )}
        </div>
    );
};

export default FavoriteCats;