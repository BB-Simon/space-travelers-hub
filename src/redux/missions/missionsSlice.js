import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
};

export const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {

  },
});

export default missionSlice.reducer;
