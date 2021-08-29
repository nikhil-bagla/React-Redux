// class InputComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             currTask: ''
//         }
//     }
//     handleChange = (e) => {
//         this.setState({ currTask: e.target.value })
//     }
//     render() {
//         return (
//             <div>
//                 <div className='input-container'>
//                     <input type='text' value={this.props.currTask} onChange={this.handleChange}></input>
//                     <button onClick={() => {
//                         this.props.handleClick(this.state.currTask);
//                         this.setState({ currTask: '' })
//                     }}>Add</button>
//                 </div>
//             </div>
//         )
//     }
// }

import React,{useState} from 'react'
const[currTask,setCurrTask]=useState('')
function InputComponent() {
    return (
        <div>
            <div className='input-container'>
                <input type='text' value={currTask} onChange={() => { handleChange }}></input>
                     <button onClick={() => {
                        this.props.handleClick(this.state.currTask);
                        this.setState({ currTask: '' })
                    }}>Add</button>
                </div>
        </div>
    )
}

export default InputComponent
