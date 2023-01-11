import {Cat, CatState} from "../../types/cat";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

const initialState: CatState = {
    cats: [],
    favorites: [],
    isLoading: true,
    error: '',
}
export const catSlice = createSlice({
    name: 'cat',
    initialState,
    reducers: {
        catsFetchingSuccess(state, action: PayloadAction<Cat[]>) {
            state.error = '';
            state.cats = [...state.cats, ...action.payload];
            state.isLoading = false;
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
        }
    }
})
export const {
    catsAddingToFavorite,
    catsRemovingFromFavorite
} = catSlice.actions;
export const selectCatReducers = (state: RootState) => state.catReducer;
export default catSlice.reducer;