import { observer } from "mobx-react-lite";
import { makeAutoObservable  } from "mobx";

class Calc  {
    mile = 0
    km = 0
    constructor() {
 
        makeAutoObservable(this)
        
    }
    
    set setKm(val) {
        this.km=val
    }

    get getKm() {
        return this.km
    }

    set setMile(val) {
        this.mile=val
    }

    get getMile() {
        return this.mile
    }

    calckmtomile(km) {
       this.km = km
        this.mile = km * 0.621371192
    }
    calcmiletokm(mile) {
       this.mile= mile
        this.km = mile * 1.609344
    }
} 

const CalcObj = new Calc()

const App = () => {
 
    return <div style={{ width: 500, margin: 'auto'}}>
        <h2>Kilométer - mérföld konverter</h2>

        <input placeholder="km" value={CalcObj.getKm} onChange={(e) => CalcObj.calckmtomile(e.target.value)} /> km =
        
        <input placeholder="mile" onChange={(e) => CalcObj.calcmiletokm(e.target.value)} value={CalcObj.getMile} /> mérföld</div>

}
 

export default observer(App);