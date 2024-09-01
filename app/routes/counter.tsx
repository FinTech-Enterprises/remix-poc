import Button from '@mui/material/Button';
import { useCounterStore } from '~/stores/counterSlice';

export default function Counter() {
  // Another option is to import the whole store and use it like this:
  // const countStore = useCounterStore(); -> and then countStore.count, countStore.increase(), countStore.decrease()
  // but bear in mind that it will cause the component to update on every state change!
  // https://github.com/pmndrs/zustand?tab=readme-ov-file#fetching-everything
  const { count, increase, decrease } = useCounterStore();

  return (
    <div className="w-100">
      <p className="p-5 text-xl"> You are now in /counter </p>
      <div className="w-100 flex space-x-10">
        <Button variant="outlined" aria-label="Increment value" onClick={() => increase(1)}>
          Increment
        </Button>
        <span data-testid="count">{count}</span>
        <Button variant="outlined" aria-label="Decrement value" onClick={() => decrease(1)}>
          Decrement
        </Button>
      </div>
    </div>
  );
}
