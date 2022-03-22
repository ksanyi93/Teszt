import { createStore } from 'redux';
import { useState } from 'react';



const reducer = (state, action) => {
  if (action.type === 'img') {
    state = action.payload
    console.log(state)
    return state;
  }

  return state;
};

const store = createStore(reducer, 'http://nyuszis.kepek1.hu/kep/nyuszis-kepek_20.jpg')

function Test(){

    const[state, setState] = useState(store.getState())

    store.subscribe(()=> {
        setState(store.getState())
    })

    return(
        <>
            <img src={state} style={{height: '50%', width: '50%'}} onClick={()=> {
                store.dispatch({
                    type: 'img',
                    payload: 'http://lovas.kepek1.hu/kep/lovas-kepek_6.jpg'
                })
            }}></img>
        </>
    )
}

export default Test;