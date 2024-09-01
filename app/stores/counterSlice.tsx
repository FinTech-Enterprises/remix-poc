import { create } from 'zustand';

interface CounterState {
  count: number;
  increase: (by: number) => void;
  decrease: (by: number) => void;
}
// Consider using immer for nested states
// https://github.com/pmndrs/zustand?tab=readme-ov-file#sick-of-reducers-and-changing-nested-states-use-immer

export const useCounterStore = create<CounterState>()((set) => ({
  count: 0,
  increase: (by) => set((state) => ({ count: state.count + by })),
  decrease: (by) => set((state) => ({ count: state.count - by })),
}));
