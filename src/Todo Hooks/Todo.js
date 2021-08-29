import React, { useState } from 'react'
import InputComponent from './InputComponent'
import TaskList from './TaskList'
function Todo() {
    const [tasks, setTasks] = useState([{ id: 1, txt: "First task" }, { id: 2, txt: "Second task" }, { id: 3, txt: "Third task" }])
    
    return (
        <>
            <div
                style={{
                    border: '2px solid black', padding: '2rem', paddingLeft: '40vw',
                    backgroundColor: 'lightblue',margin:'2rem 2rem'
                }
                        }>
            <h1>TODO APP</h1>
            <InputComponent
                tasks={tasks}
                setTasks={setTasks}/>
            <TaskList
                    tasks={tasks}
                    setTasks={setTasks}/>

            </div>
             </>
    )
}

export default Todo









