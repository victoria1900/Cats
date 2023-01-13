import axios from "axios";
import {Cat} from "../../types/cat";
import {catSlice} from "../reducers/cat-slice";
import {AppDispatch} from "../store";
import {API_KEY, API_URL, BREED_ID} from "../../consts/api";
import {nanoid} from "@reduxjs/toolkit";

export const fetchCats = (page: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get<Cat[]>(`${API_URL}/images/search?limit=20&breed_ids=${BREED_ID}&_page=${page}&api_key=${API_KEY}`);
            const data = response.data.map(item => ({...item, id: nanoid(8)}));
            dispatch(catSlice.actions.catsFetchingSuccess(data));
        } catch (e: any) {
            dispatch(catSlice.actions.catsFetchingError(e.message));
        }
    }
}
