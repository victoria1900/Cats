import React, {useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "../core/hooks/redux";
import {fetchCats, fetchCatsOnScroll} from "../core/store/actions-creators/ActionCreators";

const CatsList = () => {
    const {cats, error, isLoading} = useAppSelector(state => state.catReducer);
    const dispatch = useAppDispatch();
    const effectRun = useRef(false);
    const catImages = cats.map(cat =>
        <div className={'item'} key={cat.id}>
            <img className={'img'} src={cat.url} alt="cat"/>
        </div>
    )
    const scrollHandler = (e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            dispatch(fetchCatsOnScroll());
        }
    }
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return () => {
            document.removeEventListener('scroll', scrollHandler);
        }
    })
    useEffect(() => {
        if (!effectRun.current) {
            dispatch(fetchCats());
            return () => {
                effectRun.current = true;
            }
        }
    }, [dispatch]);

    return (
        <div className={'list'}>
            {isLoading && <p className={'font-type'}>Loading...</p>}
            {error && <p className={'font-type'}>{error}</p>}
            {!isLoading && catImages}
        </div>
    );
};

export default CatsList;