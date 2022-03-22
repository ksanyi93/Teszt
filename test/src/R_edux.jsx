import { useState } from 'react';
import { createStore } from 'redux';





const reducer = (state, action)=> {
    action.type = 'COLOR';
    state = action.payload;
    return state;
}


const store = createStore(reducer, 'green');


export default function Any(){

    const[state, setState] = useState(store.getState())

    store.subscribe(()=>{
        setState(store.getState())
    })


    return <>
        <button style={{height: 30, width: 50, backgroundColor: state}} onClick={()=>{
            store.dispatch({
                type: 'COLOR',
                payload: 'blue'
            })
        }}>Katt</button>
    
    
    </>
}