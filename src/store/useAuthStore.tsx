import { api } from "@/lib/api";
import type { User } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (credintials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  checkIsAdmin: () => boolean;
};

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login: async (credintials) => {
        try {
          const response = await api.post("/auth/login", credintials);

          if (response.data.token) {
            const { token, ...user } = response.data;
            set({
              user: user,
              token,
              isAuthenticated: true,
            });
          }
        } catch (error) {
          console.log(`Login error: ${error}`);
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },
      checkIsAdmin: () => {
        const user = get().user;
        return user?.role === "admin";
      },
    }),
    { name: "auth-storage" }
  )
);

export default useAuthStore;
