import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3';

const initialState = {
  missions: [],
  missionsLoading: false,
  missionsErros: null,
};

export const fetchMissionsData = createAsyncThunk('missions/fetchMissionsData', async () => {
  try {
    const data = await axios(`${baseUrl}/missions`);
    return data.data;
  } catch (error) {
    return error;
  }
});

export const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission(state, action) {
      const id = action.payload;
      const { missions } = state;
      const updatedMissions = missions.map((m) => {
        if (m.mission_id === id) {
          return { ...m, reserved: true };
        }
        return m;
      });

      return {
        ...state,
        missions: updatedMissions,
      };
    },
  },
  extraReducers: (builder) => {
    // Fetch Missions
    builder.addCase(fetchMissionsData.pending, (state) => ({ ...state, missionsLoading: true }));
    builder.addCase(fetchMissionsData.fulfilled, (state, action) => ({
      ...state,
      missionsLoading: false,
      missions: [...action.payload],
    }));
    builder.addCase(fetchMissionsData.rejected, (state, action) => ({
      missionsLoading: false,
      missionsError: action.payload,
    }));
  },
});

export const { joinMission } = missionSlice.actions;

export default missionSlice.reducer;
