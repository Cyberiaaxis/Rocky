import create from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(persist(set => ({
      currentUserId: {}, 
      currentAccessToken: {},
      setUserId: (currentUserId) => set(() => ({currentUserId})),
      setAccessToken: (currentAccessToken) => set(() => ({currentAccessToken})),
})));

export default useStore;