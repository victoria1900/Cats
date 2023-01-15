import {Cat, CatState} from "../../types/cat";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {fetchCats} from "../actions-creators/cat";

export const initialState: CatState = {
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
        catsAddingToFavorite(state, action: PayloadAction<Cat>) {
            state.favorites = [...state.favorites, action.payload];
        },
        catsRemovingFromFavorite(state, action: PayloadAction<string>) {
            state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload);
        },
    },
    extraReducers: {
        [fetchCats.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchCats.fulfilled.type]: (state, action: PayloadAction<Cat[]>) => {
            state.cats = [...state.cats, ...action.payload];
            state.isLoading = false;
            state.currentPage += 1;
        },
        [fetchCats.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})
export const {
    catsAddingToFavorite,
    catsRemovingFromFavorite
} = catSlice.actions;
export const selectCatReducers = (state: RootState) => state.catReducer;
export default catSlice.reducer;