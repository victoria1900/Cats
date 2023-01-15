import axios from "axios";
import {Cat} from "../../types/cat";
import {API_KEY, API_URL, BREED_ID} from "../../consts/api";
import {createAsyncThunk, nanoid} from "@reduxjs/toolkit";

export const fetchCats = createAsyncThunk("cat/fetchCats", async (page: number, thunkAPI) => {
    try {
        const response = await axios.get<Cat[]>(`${API_URL}/images/search?limit=20&breed_ids=${BREED_ID}&_page=${page}&api_key=${API_KEY}`);
        return response.data.map(item => ({...item, id: nanoid(8)}));
    } catch (e: any) {
        return thunkAPI.rejectWithValue(e.message);
    }
});