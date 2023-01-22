import React, {FC, useCallback, useEffect} from 'react';
import {useAppSelector} from "../../core/hooks/use-app-selector";
import CatCard from "../../components/cat-card/cat-card";
import {catSlice, selectCatReducers} from "../../core/store/reducers/cat-slice";
import './style.scss';
import {useActions} from "../../core/hooks/use-actions";
import {useAppDispatch} from "../../core/hooks/use-app-dispatch";
import {MoonLoader} from "react-spinners";

const CatList: FC = () => {
    const {cats, error, isLoading, currentPage} = useAppSelector(selectCatReducers);
    const {fetchCats} = useActions();
    const dispatch = useAppDispatch();
    const scrollHandler = useCallback((e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            dispatch(catSlice.actions.catsFetching());
        }
    }, [dispatch]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return () => {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, [scrollHandler]);

    useEffect(() => {
        if (isLoading) {
            fetchCats(currentPage);
        }
    }, [isLoading, fetchCats, currentPage]);

    return (
        <>
            {cats.length > 0
                &&
                <ul className={'cat-list'}>
                    {cats.map(cat =>
                        <CatCard key={cat.id} cat={cat}/>
                    )}
                </ul>
            }
            {error && <p>{error}</p>}
            <MoonLoader
                color={'#000'}
                loading={isLoading}
                cssOverride={{
                    display: "block",
                    margin: "0 auto",
                }}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </>
    );
};

export default CatList;