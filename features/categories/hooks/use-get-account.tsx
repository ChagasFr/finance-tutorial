import { create } from "zustand";

type OpenAccountsState = {
    id?: string;
    isOpen: boolean;
    onOpen: (id: string) => void;
    onClose: () => void;
};

export const useOpenAccount = create<OpenAccountsState>((set) => ({
    id: undefined,
    isOpen: false,
    onOpen: (id: string) => set({ isOpen: true }),
    onClose: () => set({ isOpen: false, id: undefined }),
}));