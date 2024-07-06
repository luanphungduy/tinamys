import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    modalVisible: false,
};

export const modalCreateWorkspaceSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        handleShowCreateWorkspaceForm: (state) => {
            state.modalVisible = true;
        },
        handleHideCreateWorkspaceForm: (state) => {
            state.modalVisible = false;
        },
    },
});

export const { handleShowCreateWorkspaceForm, handleHideCreateWorkspaceForm } = modalCreateWorkspaceSlice.actions;

export default modalCreateWorkspaceSlice.reducer;
