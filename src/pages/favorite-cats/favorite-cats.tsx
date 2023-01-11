import React, {FC} from 'react';
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {selectCatReducers} from "../../core/store/reducers/cat-slice";
import CatCard from "../../components/cat-card/cat-card";

const FavoriteCats: FC = () => {
    const {favorites} = useAppSelector(selectCatReducers);

    return (
        <>
            <div className={'list'}>
                {favorites.map(favorite =>
                    <CatCard key={favorite.id} cat={favorite}/>
                )}
            </div>
            {favorites.length === 0 && <p>There are no cats here yet</p>}
        </>

    );
};

export default FavoriteCats;