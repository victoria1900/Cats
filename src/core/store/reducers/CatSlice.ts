import {Cat, CatState} from "../types/ICat";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: CatState = {
    cats: [],
    isLoading: false,
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
            state.isLoading = false;
            state.error = '';
            state.cats = action.payload;
        },
        catsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        catsFetchingOnScroll(state, action: PayloadAction<Cat[]>) {
            state.error = '';
            state.cats = [...state.cats, ...action.payload]
            state.isLoading = false;
        }
    }
})
export default catSlice.reducer