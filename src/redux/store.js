import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer, { reserveRocket } from './features/rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

// Dispatch reserveRocket action on click of "Reserve Rocket" button
export const reserveHandler = (rocketId) => {
  store.dispatch(reserveRocket(rocketId));
};

export default store;
