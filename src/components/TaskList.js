import { useSelector } from "react-redux" 

export const TaskList = () => {
    const tasks = useSelector(state => state.tasks)
    return(
        <div className="App">
            <h1>TaskList</h1>
            {tasks.map(task => {
                return(
                    <div key={task.id} className="App">
                        <h1>{task.name}</h1>
                        <h2>{task.description}</h2>
                    </div>
                )
            })}
        </div>
    )
}