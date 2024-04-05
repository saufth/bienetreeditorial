import { create } from 'zustand'

interface PonterStore {
  pointer: 'default' | 'hover'
  enter: () => void
  leave: () => void
}

export const usePointerSotre = create<PonterStore>((set) => ({
  pointer: 'default',
  enter: () => set({ pointer: 'hover' }),
  leave: () => set({ pointer: 'default' })
}))
