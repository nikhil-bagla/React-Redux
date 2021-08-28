import React from 'react';
import Balls from "./Components/Balls"
// import Bats from "./Components/Bats"
import { Provider } from 'react-redux';
import store from "./store"
import './App.css';

function App() {
  return (
    <div>
      <Provider store={store}>
        <div className="App">
          <Balls />
       </div>

        
      </Provider>
     
      {/* <Bats/> */}
    </div>
  );
}

export default App;
