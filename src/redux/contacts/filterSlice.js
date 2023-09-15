import { createSlice } from "@reduxjs/toolkit";


const filtersInitialState = " ";

const filterSlice = createSlice({
    name:"filters",
    initialState: filtersInitialState,
    reducers: {
        changeFilter(state, action){
            return (state = action.payload);
        }
    }
});

export const {changeFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;