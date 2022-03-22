import { createStore } from 'redux';
import { useState } from 'react';



const reducer = (state, action) => {
  if (action.type === 'COLOR') {
    state = action.payload
    console.log(state)
    return state;
  }

  return state;
};

const store = createStore(reducer, 'purple');




export default function New_App() {

  const [state, setState] = useState(store.getState());

  store.subscribe(() => {
    setState(store.getState())
  })

  return <div style={{ height: '100vh', backgroundColor: state }} onClick={() => {
    store.dispatch({
      type: 'COLOR',
      payload: 'gray'
    })
  }}>

    <InnerDiv></InnerDiv>
  </div>
}

function InnerDiv() {

  const [state, setState] = useState(store.getState());

  store.subscribe(() => {
    setState(store.getState())
  })


  return <div style={{ height: 100, width: 100, background: state === 'purple' ? 'green' : 'blue' }}></div>
}