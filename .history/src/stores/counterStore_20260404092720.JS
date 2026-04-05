import {create} from 'zustand'

const counterStore = create((set) => ({ 
  count: 1,
  increase: () => set()
}))

export default counterStore;