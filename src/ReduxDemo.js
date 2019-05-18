import React, { Component } from 'react';

//Redux
import { createStore } from 'redux';

class ReduxDemo extends Component {
  render(){
    //Step 2- Reducer: Requires a state and an action
    const reducer = (state, action) => {
      if(action.type === "Attack"){
        return action.payload
      } else if(action.type === "Green Attack") {
        return action.payload
      }
        return state;
    }

    //Step 1- Store: Reducer, State (In other words the 2 parameters that the createStore function takes the first one is the reducer, and the second one is the default state. Usually the chosen state is an object. We'll get it later.)
    const store = createStore(reducer, "Hello World");

    //Step 3- Subscribe:
    store.subscribe(() => console.log("Store is now", store.getState()))

    //Step 4- Dispatch Action:
    const MySamp = () => "It absolutely worked";

    store.dispatch({type: "Green Attack", payload: "HULK"})
    store.dispatch({type: "Attack", payload: MySamp()})


    return(
      <div>
        <h1>Test</h1>
      </div>
    )
  }
}

export default ReduxDemo;
