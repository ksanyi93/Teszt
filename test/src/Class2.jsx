import React from "react";



class App extends React.Component{
    
    constructor(name, birth){
        this.name = name
        this.birth = birth

    }

    render(){
        getAllDate() {
            return this.name+' '+this.birth
        }
    }
}

let psn = person("Klára", "Budapest");
alert(psn.getAllDate());

export default App;