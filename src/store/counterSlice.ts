import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
export interface CounterState {
  value: number
  list: any[]
}

const initialState: CounterState = {
  value: 0,
  list: [],
}
export const asyncAddCounter = createAsyncThunk(
  'users/fetchById',
  // Declare the type your function argument here:
  async (counter: number) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(counter)
      }, 1000)
    })
    const response = await promise
    return response as number
  },
)
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncAddCounter.fulfilled, (state, { payload }) => {
      state.value += payload
    })
  },
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
