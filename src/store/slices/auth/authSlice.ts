import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthSliceType = {
    email: string;
    name: string;
    token: string | null;
};

const initialState: AuthSliceType = {
    name: "",
    email: "",
    token: null,   
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (
            state,
            action: PayloadAction<{ email: string; name: string; token: string }>
        ) => {
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.token = action.payload.token;
        },

        logout: (state) => {
            state.email = "";
            state.name = "";
            state.token = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
