import React, {useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "../../core/hooks/redux";
import {fetchCats} from "../../core/store/actions-creators/action-creators";
import CatCard from "../../components/cat-card/cat-card";
import {selectCatReducers} from "../../core/store/reducers/cat-slice";
import './style.scss';

const CatList = () => {
    const {cats, error, isLoading} = useAppSelector(selectCatReducers);
    const dispatch = useAppDispatch();
    const effectRun = useRef(false);

    useEffect(() => {
        if (isLoading) {
            if (!effectRun.current) {
                dispatch(fetchCats());
                return () => {
                    effectRun.current = true;
                }
            }
        }
    }, [isLoading, dispatch]);

    return (
        <>
            <div className={'list'}>
                {cats.map((cat) =>
                    <CatCard key={cat.id} cat={cat}/>
                )}
            </div>
            {error && <p>{error}</p>}
            {isLoading && <p className={'text-loading'}>Loading cats...</p>}
        </>
    );
};

export default CatList;