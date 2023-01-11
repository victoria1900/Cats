import axios from "axios";
import {Cat} from "../../types/cat";
import {catSlice} from "../reducers/cat-slice";
import {AppDispatch} from "../store";

export const fetchCats = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get<Cat[]>('https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=beng&api_key=live_4O9YGhCyFJScklbI2wf9QwMc81eFKiNBkUIMsCidzJDikafxkLiC0xz52zbfP8qG');
            dispatch(catSlice.actions.catsFetchingSuccess(response.data));
        } catch (e: any) {
            dispatch(catSlice.actions.catsFetchingError(e.message));
        }
    }
}
