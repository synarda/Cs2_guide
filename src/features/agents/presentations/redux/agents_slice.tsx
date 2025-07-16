import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiUrls } from '../../../../product/constants/api';
import { Agent, AgentsResponse, AgentsState } from '../model/agent_card_model';

const initialState: AgentsState = {
    data: [],
    loading: false,
    error: null,
    total: 0,
    page: 1,
    searchTerm: ""
};

export const fetchAgents = createAsyncThunk<Agent[], void>(
    'agents/fetchAgents',
    async () => {
        const response = await fetch(`${apiUrls.baseUrl}/agents.json`);
        if (!response.ok) {
            return [];
        }
        const data: Agent[] = await response.json();
        return data;
    }
);

const agentsSlice = createSlice({
    name: 'agents',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchAgents.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAgents.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAgents.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Unknown error';
            });
    },
});

export default agentsSlice.reducer;

export const { setSearchTerm } = agentsSlice.actions;
