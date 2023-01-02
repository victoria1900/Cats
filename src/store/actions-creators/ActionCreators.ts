import {AppDispatch} from "../store";
import axios from "axios";
import {Cat} from "../../types/ICat";
import {catSlice} from "../reducers/CatSlice";

export const fetchCats = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(catSlice.actions.catsFetching());
            const response = await axios.get<Cat[]>('https://api.thecatapi.com/v1/images/search?limit=15&api_key=live_4O9YGhCyFJScklbI2wf9QwMc81eFKiNBkUIMsCidzJDikafxkLiC0xz52zbfP8qG');
            dispatch(catSlice.actions.catsFetchingSuccess(response.data));
        } catch (e) {
            dispatch(catSlice.actions.catsFetchingError('Error!'));
        }
    }

}