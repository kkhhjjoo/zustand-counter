import {create} from 'zustand'

const counterStore = create(() => ({ 
  count: 1,
  increase: () => set()
}))

export default counterStore;