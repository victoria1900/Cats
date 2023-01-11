import axios from "axios";
import {Cat} from "../../types/cat";
import {catSlice} from "../reducers/cat-slice";
import {AppDispatch} from "../store";
import {API_KEY, API_URL} from "../../utils/api";

export const fetchCats = (page:number) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get<Cat[]>(`${API_URL}/images/search?limit=20&_page=${page}&api_key=${API_KEY}`);
            dispatch(catSlice.actions.catsFetchingSuccess(response.data));
        } catch (e: any) {
            dispatch(catSlice.actions.catsFetchingError(e.message));
        }
    }
}
