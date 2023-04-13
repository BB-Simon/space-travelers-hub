import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const rocketsUrl = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [],
  isLoading: false,
  isError: false,
  fetched: false,
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await fetch(rocketsUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reservation: (state, action) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      return {
        ...state,
        rockets: newState,
      };
    },
    reservationCancel: (state, { payload }) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== payload) return rocket;
        return { ...rocket, reserved: false };
      });
      return {
        ...state,
        rockets: newState,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => ({
        ...state, isLoading: true,
      }))
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const newrockets = [];
        action.payload.map((element) => (
          newrockets.push({
            id: element.id,
            rocket_name: element.name,
            description: element.description,
            flickr_images: element.flickr_images[0],
            reserved: false,
          })
        ));
        return ({
          ...state,
          isLoading: false,
          rockets: newrockets,
          fetched: true,
        });
      })
      .addCase(fetchRockets.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        isError: action.payload,
      }));
  },
});

export default rocketsSlice.reducer;

export const { reservation, reservationCancel } = rocketsSlice.actions;
