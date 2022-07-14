import { configureStore } from "@reduxjs/toolkit"
// Only import the reducers from taskSlice and rename with "tasksReducer"
import tasksReducer from "../features/tasks/taskSlice"

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
})