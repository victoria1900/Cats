import {Cat} from "../../types/ICat";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CatState {
    cats: Cat[],
    isLoading: boolean,
    error: string,
}

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
        }
    }
})
export default catSlice.reducer