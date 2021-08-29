let initialState = {
    balls: 15
}
function BallReducer(state = initialState, action) {
    //update
    //n types of changes

    //state change logic
    
    console.log(state);
    switch (action.type) {
        //store update
        case "buy_ball":
            return {
                balls: state.balls - 1
            }
        case "sell_ball":
            return {
                balls: state.balls + 1
            }
        default: return initialState;
    }



}
export default BallReducer;