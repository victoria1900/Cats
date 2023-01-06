import React, {useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "../core/hooks/redux";
import {fetchCats} from "../core/store/actions-creators/ActionCreators";
import CatCard from "../components/CatCard";

const CatsList = () => {
    const {error, isLoading} = useAppSelector(state => state.catReducer);
    const dispatch = useAppDispatch();
    const effectRun = useRef(false);

    useEffect(() => {
        if (!effectRun.current) {
            dispatch(fetchCats());
            return () => {
                effectRun.current = true;
            }
        }
    }, [dispatch]);

    return (
        <>
            <div className={'list'}>
                <CatCard/>
            </div>
            {error && <p>{error}</p>}
            {isLoading && <p>Loading...</p>}
        </>
    );
};

export default CatsList;