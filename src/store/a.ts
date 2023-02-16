import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface State {}
const initialState = {}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setState: (state, { payload }: PayloadAction<State>) => {
      const arr = Object.keys(payload) as (keyof State)[]
      arr.forEach((key) => {
        state[key] = payload[key]
      })
    },
  },
})
export const { setState } = counterSlice.actions

export default counterSlice.reducer
