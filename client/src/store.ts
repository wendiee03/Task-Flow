import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasksSlice'; // Import your slice

const store = configureStore({
    reducer: {
        tasks: tasksReducer, // Add your reducer here
    },
});

export default store;