import React,{useState} from 'react'

function InputComponent(props) {
    let { tasks, setTasks } = props
const [currTask, setCurrTask] = useState('')
   
    let handleClick = (task) => {
        console.log(currTask);
        tasks.push({ id:tasks.length + 1, txt:currTask })
        // setTasks({ ...task,id: tasks.length + 1, txt: task })
        console.log(tasks);
        setCurrTask('');

        let nta = [...tasks]
        setTasks(nta)
    }
    return (
        <div>
            <div className='input-container'>
                <input type='text' value={currTask} onChange={(e) => { setCurrTask(e.target.value) }}></input>
                     <button onClick={() => {
                        handleClick(currTask);
                        // setCurrTask('')
                    }}>Add</button>
                </div>
        </div>
    )
}

export default InputComponent
