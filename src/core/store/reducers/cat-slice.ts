import {Cat, CatState} from "../../types/cat";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {fetchCats} from "../actions-creators/cat";

const initialState: CatState = {
    cats: [],
    favorites: [],
    isLoading: true,
    currentPage: 1,
    error: '',
}
export const catSlice = createSlice({
    name: 'cat',
    initialState,
    reducers: {
        catsFetching(state) {
            state.isLoading = true;
        },
        catsFetchingSuccess(state, action: PayloadAction<Cat[]>) {
            state.error = '';
            state.cats = [...state.cats, ...action.payload];
            state.isLoading = false;
            state.currentPage += 1;
        },
        catsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        catsAddingToFavorite(state, action: PayloadAction<Cat>) {
            state.favorites = [...state.favorites, action.payload];
        },
        catsRemovingFromFavorite(state, action: PayloadAction<string>) {
            state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload);
        },
    }
})
export const {
    catsAddingToFavorite,
    catsRemovingFromFavorite
} = catSlice.actions;
export const selectCatReducers = (state: RootState) => state.catReducer;
export default catSlice.reducer;