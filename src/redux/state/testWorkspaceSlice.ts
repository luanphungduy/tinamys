import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    hasWorkspace: true,
};

export const testWorkspaceSlice = createSlice({
    name: 'workspace',
    initialState,
    reducers: {
        handleCreateWorkspace: (state) => {
            state.hasWorkspace = true;
        },
        handleLeaveWorkspace: (state) => {
            state.hasWorkspace = false;
        },
    },
});

export const { handleCreateWorkspace, handleLeaveWorkspace } = testWorkspaceSlice.actions;

export default testWorkspaceSlice.reducer;
