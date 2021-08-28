import React from 'react'
import { connect } from "react-redux"  //pull state from store

function Balls(props) {
    //state -> props(redux)
    //Prop -> function
    // const [balls, setBalls] = useState(15);
    
    console.log(props)
    return (
        <div>
            <h1>Number of Balls - {props.balls} </h1>
            <button
                onClick={props.buyBall}>Buy Ball</button>
            <button
                onClick={props.sellBall}>Sell Ball</button>
        </div>
    )
}

//provides state variables from store
const mapStateToProps = (store) => {
    
    //state variables change
    console.log("in map state to props",store);
    return store;
}
//dispatch action

const mapDispatchtoProps = (dispatch) => {
    //action
    //handler function
    return {
        buyBall: () => {   //buyBall is also passed as props to the component 
            //dispatch action
            return dispatch({ type: "buy_ball" })
        },
        sellBall: () => {   //sellBall is also passed as props to the component 
            //dispatch action
            return dispatch({ type: "sell_ball" })
        }
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Balls)  //connect function is like useContext
                                                //which subscribes the passed parameter 
                                                //to the value passed by the provider
