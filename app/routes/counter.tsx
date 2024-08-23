import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../stores/counterSlice'
import Button from '@mui/material/Button';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='w-100'>
      <p className="p-5 text-xl"> You are now in /counter </p>
      <div className='w-100 flex space-x-10'>
        <Button
          variant="outlined"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span data-testid="count">{count}</span>
        <Button
          variant='outlined'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  )
}