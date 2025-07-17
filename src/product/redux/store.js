import { configureStore } from '@reduxjs/toolkit';
import agentsReducer from '../../features/agents/presentations/redux/agents_slice.tsx';
import skinsReducer from '../../features/skins/presentations/redux/skins_slice.tsx'

const store = configureStore({
    reducer: {
        agents: agentsReducer,
        skins: skinsReducer,
    },
});

export default store;
