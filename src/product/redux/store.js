import { configureStore } from '@reduxjs/toolkit';
import agentsReducer from '../../features/agents/presentations/redux/agents_slice.tsx';

const store = configureStore({
    reducer: {
        agents: agentsReducer,
    },
});

export default store;
