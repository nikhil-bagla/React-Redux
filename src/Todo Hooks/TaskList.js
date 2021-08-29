import React from 'react'

function TaskList(props) {
    let { tasks, onDelete}=props
    return (
        <div>
            <div className='class-list'>
                <ul>
                    {
                            tasks.map(task => (
                                <li>
                                    <h2>{task.txt}</h2>
                                    <button onClick={() =>onDelete(task.id)}>Delete</button>
                                </li>
                            ))

                        }
                    </ul>
                 </div>
        </div>
    )
}

export default TaskList

