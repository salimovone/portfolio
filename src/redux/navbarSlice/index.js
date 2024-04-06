import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mobile: false,
}

export const counterSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setMobile: (state, {payload}) => {
      state.mobile = payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setMobile } = counterSlice.actions

export default counterSlice.reducer