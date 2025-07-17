import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Skin, SkinsState } from '../models/skin_card_model';
import { apiUrls } from '../../../../product/constants/api';


const initialState: SkinsState = {
    data: [],
    loading: false,
    error: null,
    total: 0,
    page: 1,
    searchTerm: ""
};

export const fetchSkins = createAsyncThunk<Skin[], void>(
    'skins/fetchSkins',
    async () => {
        const response = await fetch(`${apiUrls.baseUrl}/skins.json`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: Skin[] = await response.json();
        console.log(data);
        return data;
    }
);

const skinsSlice = createSlice({
    name: 'skins',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchSkins.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSkins.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchSkins.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Unknown error';
            });
    },
});

export default skinsSlice.reducer;

export const { setSearchTerm } = skinsSlice.actions;
