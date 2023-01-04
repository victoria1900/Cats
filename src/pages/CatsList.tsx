import React, {useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "../core/hooks/redux";
import {fetchCats} from "../core/store/actions-creators/ActionCreators";
import {nanoid} from "@reduxjs/toolkit";

const CatsList = () => {
    const {cats, error, isLoading} = useAppSelector(state => state.catReducer);
    const dispatch = useAppDispatch();
    const effectRun = useRef(false);
    const catImages = cats.map(cat =>
        <div className={'item'} key={nanoid(10)}>
            <img className={'img'} loading="lazy" src={cat.url} alt="cat"/>
        </div>
    )

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return ()=> {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, [])

    useEffect(() => {
        if (!effectRun.current) {
            dispatch(fetchCats());
            return () => {
                effectRun.current = true;
            }
        }
    }, [dispatch]);

    const scrollHandler = () => {
        if (document.documentElement.getBoundingClientRect().bottom < document.documentElement.clientHeight + 150) {
            console.log(document.documentElement.getBoundingClientRect().bottom < document.documentElement.clientHeight + 150)
        }
    }

    return (
        <>
            <div className={'list'}>
                {catImages}
            </div>
            {error && <p>{error}</p>}
            {isLoading && <p>Loading...</p>}
        </>
    );
};

export default CatsList;