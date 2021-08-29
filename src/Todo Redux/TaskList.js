class TaskList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className='class-list'>
                    <ul>
                        {
                            this.props.tasks.map(task => (
                                <li>
                                    <h1>{task.txt}</h1>
                                    <button onClick={() => this.props.onDelete(task.id)}>Delete</button>
                                </li>
                            ))

                        }
                    </ul>
                </div>
            </div>
        )
    }
}