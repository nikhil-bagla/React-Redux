import { createStore } from "redux"

let state = {
    tasks: [{ id: 1, txt: "First task" }, { id: 2, txt: "Second task" }, { id: 3, txt: "Third task" }]
}
const store = createStore()

export default store