import { create } from 'zustand';

interface userState {
    email: string;
    setEmail: (email: string) => void;
}

const useStore = create<userState>()((set) => ({
    email: '',
    setEmail: (email) => set((state) => ({ email: email })),
}));

export default useStore;
