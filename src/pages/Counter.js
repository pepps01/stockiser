import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,addNumber } from '../redux/features/counter/counterSlice'

// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  
  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>

      {/* <div>
        <input
          aria-label="Set increment amount"
          value={addNumber}
          onChange={e => addNumber(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(addNumber) || 0))
          }
        >
          Add Amount
        </button>
    </div> */}
    </div>
  )
}

export default Counter