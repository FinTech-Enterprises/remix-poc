import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import counterReducer, { CounterState } from '../stores/counterSlice'
import Counter from '../routes/counter'

// Utility function to render a component with Redux store
function renderWithRedux(
  ui: React.ReactNode,
  {
    initialState,
    store = configureStore({
      reducer: { counter: counterReducer },
      preloadedState: initialState,
    }),
  }: { initialState?: { counter: CounterState }; store?: EnhancedStore } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

describe('Counter Component', () => {
  it('renders the counter with the initial state', () => {
    renderWithRedux(<Counter />, {
      initialState: {
        counter: { value: 0 },
      },
    })

    // Check if the initial value is rendered
    expect(screen.getByText('You are now in /counter')).toBeDefined();
    expect(screen.getByText('0')).toBeDefined();
  })

  it('increments the counter value when the increment button is clicked', () => {
    renderWithRedux(<Counter />, {
      initialState: {
        counter: { value: 0 },
      },
    })

    const incrementButton = screen.getByLabelText('Increment value')
    fireEvent.click(incrementButton)

    // Check if the value is incremented
    const count = screen.getByTestId('count')
    expect(count).toBeDefined()
    expect(count.textContent).toBe('1')
  })

  it('decrements the counter value when the decrement button is clicked', () => {
    renderWithRedux(<Counter />, {
      initialState: {
        counter: { value: 0 },
      },
    })

    const incrementButton = screen.getByLabelText('Decrement value')
    fireEvent.click(incrementButton)

    // Check if the value is incremented
    const count = screen.getByTestId('count')
    expect(count).toBeDefined()
    expect(count.textContent).toBe('-1')
  })
})
