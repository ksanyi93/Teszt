import React from "react";
import ReactDOM from "react-dom"
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"


class Timer {

   
    constructor(){
        makeAutoObservable(this)
        }
}


const myTimer = new Timer

