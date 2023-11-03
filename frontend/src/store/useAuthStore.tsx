/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'

const useAuthStore = create((set) => ({
    accessToken: null,
    user: null,
    isLoggedIn: false,

    setAccessToken: (token: any) => {
        set({ accessToken: token });
    },

    setUser: (userData: any) => {
        set({ user: userData });
    },

    login: () => {
        set({ isLoggedIn: true });
    },

    logout: () => {
        set({ accessToken: null, user: null, isLoggedIn: false });
    },
}));

export default useAuthStore;
