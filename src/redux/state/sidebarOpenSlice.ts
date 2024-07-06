import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    isSidebarOpen: true,
};

export const sidebarOpenSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        handleOpenSidebar: (state) => {
            state.isSidebarOpen = true;
        },
        handleCloseSidebar: (state) => {
            state.isSidebarOpen = false;
        },
    },
});

export const { handleOpenSidebar, handleCloseSidebar } = sidebarOpenSlice.actions;

export default sidebarOpenSlice.reducer;
