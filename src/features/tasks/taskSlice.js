import { createSlice } from "@reduxjs/toolkit"

const defaultState = [
    {
        id: "1",
        name: "Task 1",
        description: "Task 1 description",
        completed: false
    },
    {
        id: "2",
        name: "Task 2",
        description: "Task 2 description",
        completed: false
    }
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: defaultState,
    reducers: {

    }
})

export default taskSlice.reducer