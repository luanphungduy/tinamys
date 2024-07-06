import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '@/redux/state/modalCreateWorkspaceSlice';
import sidebarReducer from '@/redux/state/sidebarOpenSlice';
import workspaceReducer from '@/redux/state/testWorkspaceSlice';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        sidebar: sidebarReducer,
        // Test
        workspace: workspaceReducer,
    },
});
