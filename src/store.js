import { createStore } from "redux"
import rootReducer from "./redux/rootReducer";

console.log('HELLO');

const store = createStore(rootReducer);

export default store


//steps->
//1.Make state
//2.Make reducer and pass that reducer to createStore which creates a store for our states to be used by components
//3.in App.js import {Provider} from "react-redux",import this store file 
//4.then as we do in context api,write the component between provider tags which should subcribe to value of store
    // //<Provider store={store}>
    // < div className = "App" >
    //     <Balls />
    //    </div >
    //5.this value will be passed as a prop to Balls Component then we can connect to store there and use this value and change it with the help of dispatch function
    //connect function is used to connect to store in our component(Balls)
    //connect function futher provides two functions one for dispatch(which applies the action or changes state) and a function which simply provides states
    //Flow- Store->App.js->mapstatetoprops->Component(Balls)