import React from 'react'

function TaskList(props) {
    let { tasks, setTasks } = props
    const onDelete = (id) => {
        let nta = tasks.filter(obj => {
            return obj.id != id    //returns all other objects then the object whose id is passed to this function
        })
        setTasks(nta)
    }
    return (
        <div>
            <div className='class-list'>
                <ul>
                    {
                        tasks.map(task => (
                            <li>
                                <h2>{task.txt}</h2>
                                <button onClick={() => onDelete(task.id)}>Delete</button>
                            </li>
                        ))

                    }
                </ul>
            </div>
        </div>
    )
}

export default TaskList

