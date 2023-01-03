import axios from "axios";
import {Cat} from "../types/ICat";
import {catSlice} from "../reducers/CatSlice";
import {AppDispatch} from "../store";
import {nanoid} from "@reduxjs/toolkit";

export const fetchCats = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(catSlice.actions.catsFetching());
            const response = await axios.get<Cat[]>('https://api.thecatapi.com/v1/images/search?limit=20&api_key=live_4O9YGhCyFJScklbI2wf9QwMc81eFKiNBkUIMsCidzJDikafxkLiC0xz52zbfP8qG');
            dispatch(catSlice.actions.catsFetchingSuccess(response.data));
        } catch (e: any) {
            dispatch(catSlice.actions.catsFetchingError(e.message));
        }
    }

}
export const fetchCatsOnScroll = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(catSlice.actions.catsFetching);
            const response = await axios.get<Cat[]>('https://api.thecatapi.com/v1/images/search?limit=20&api_key=live_4O9YGhCyFJScklbI2wf9QwMc81eFKiNBkUIMsCidzJDikafxkLiC0xz52zbfP8qG');
            dispatch(catSlice.actions.catsFetchingOnScroll(response.data))
        } catch (e: any) {
            dispatch(catSlice.actions.catsFetchingError(e.message));
        }
    }

}