import { create } from 'zustand';

interface User {
  fullname: string;
  email: string;
  role: string;
}

interface LineUser {
  lineId: string;
  role: string;
}

interface AuthState {
  user: User | null;
  lineUser: LineUser | null;
  accessToken: string | null;
  setUser: (user: User | null) => void;
  setLineUser: (lineUser: LineUser | null) => void;
  setAccessToken: (token: string | null) => void;
  clearAuth: () => void;
}

const user = typeof window !== 'undefined' ? localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "null") : null : null;
const lineUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("lineUser") || "null") : null;
const accessToken = typeof window !== 'undefined' ? localStorage.getItem("accessToken") : null;

export const useAuthStore = create<AuthState>((set) => ({
  user: user,
  lineUser: lineUser,
  accessToken: accessToken,
  setUser: (user: User | null) => {
    if (typeof window !== "undefined") {
      console.log("Setting user:",user);
      if (typeof window !== 'undefined') {
        localStorage.setItem("user",JSON.stringify(user));
        set({ user });
      }
    }
  },
  setLineUser: (lineUser: LineUser | null) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lineUser",JSON.stringify(lineUser));
      set({ lineUser });
    }
  },
  setAccessToken: (token: string | null) => {
    if (typeof window !== 'undefined') {
      if (token) {
        localStorage.setItem("accessToken",token);
      } else {
        localStorage.removeItem("accessToken");
      }
    }
    set({ accessToken: token });
  },
  clearAuth: () => {
    if (typeof window !== "undefined") {
      console.log("Clearing auth"); // Debugging
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      set({ user: null,accessToken: null });
    }
  }
}));
