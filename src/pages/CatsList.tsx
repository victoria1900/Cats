import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchCats} from "../store/actions-creators/ActionCreators";

const CatsList = () => {
    const {cats, error, isLoading} = useAppSelector(state => state.catReducer);
    const dispatch = useAppDispatch();
    const catImages = cats.map(cat => <div className={'item-img'} key={cat.id}><img className={'img'} src={cat.url}
                                                                                    alt="cat"/></div>)

    useEffect(() => {
        dispatch(fetchCats());
    }, []);

    return (
        <div className={'list-img'}>
            {isLoading && <p className={'font-type'}>Loading...</p>}
            {error && <p className={'font-type'}>{error}</p>}
            {isLoading === false && catImages}
        </div>
    );
};

export default CatsList;