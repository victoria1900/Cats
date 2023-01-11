import {bindActionCreators} from "@reduxjs/toolkit";
import * as CatActionCreators from "../store/actions-creators/cat";
import {useAppDispatch} from "./use-app-dispatch";

export const useActions = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(CatActionCreators, dispatch);
}