import './App.css';
import {observer} from "mobx-react-lite";
import { makeObservable, observable, action, computed, autorun,  reaction} from "mobx";
import Vehicles from "./Vehicles";
import {VehicleItem, UserItem} from "./HTMLContent"


class Engine {
  availables = [];
  reserveds = [];
  users = [];

  constructor(){
    this.availables = Vehicles;

    makeObservable(this, {
      adduser: action,
      unregisterVehicle: action,
      registerVehToUser: action,
      getStats: observable,
      availables: observable,
      reserveds: observable,
      users: observable,
      getUserCount: computed,
      getReservedsLength: computed,
      getAvailablesLength: computed

    });
    
  }

  adduser() {
    const name = prompt('Név')
    const address = prompt('Cím')
    const email = prompt('E-mail')
    const tel = prompt('Telefonszám')
    const deadline = prompt('Határidő')

    if(!name) return;

    this.users.push({ id: Math.floor(Math.random() * 10000), vehicle_id: 0, name: name, address: address, email: email, tel: tel, deadline: deadline })
    
  
  }

  //User Id getter
  getUserIndexById(user_id){
    return this.users.findIndex((user)=>parseInt(user.id) === parseInt(user_id))
  }

  //Elérhető autó Id getter
  getVehicleIndexById(vehicle_id){
    return this.availables.findIndex((veh)=>parseInt(veh.id) === parseInt(vehicle_id))
  }

  //Foglalt autó Id getter
  getReservedIndexById(vehicle_id){
    return this.reserveds.findIndex((veh)=>parseInt(veh.id) === parseInt(vehicle_id))
  }

  getUserByVehicleId(vehicle_id){
    if(vehicle_id === 0) return false;
    const user_index = this.users.findIndex(user => parseInt(user.vehicle_id) === parseInt(vehicle_id))
    if(user_index >= 0)
      return this.users[user_index]
  }

  registerVehToUser(vehicle_id, user_id){
    if(!vehicle_id)
      return

    const userIndex = this.getUserIndexById(user_id)
    
    if(userIndex >= 0){
      this.unregisterVehicle(this.users[userIndex].vehicle_id)

      this.users[userIndex].vehicle_id = vehicle_id

      const vehicleIndex = this.getVehicleIndexById(vehicle_id)

      this.reserveds.push(this.availables[vehicleIndex])
    }
  }

  unregisterVehicle(vehicle_id){
    const removableReservedIndex = this.getReservedIndexById(vehicle_id)

    if(removableReservedIndex >= 0){
      this.reserveds.splice(removableReservedIndex, 1)
    }

    const userIndex = this.users.findIndex((user) => parseInt(user.vehicle_id) === parseInt(vehicle_id));

    if(userIndex >= 0){
      this.users[userIndex].vehicle_id = 0
    }
  }

  get getUserCount() {
    return this.users.length
  }

  get getAvailablesLength() {
    return this.availables.length;
  }
 
  get getReservedsLength() {
    return this.reserveds.length;
  }


  getStats(){
    return `Összesen ${this.getAvailablesLength} autó van ebből ${this.getReservedsLength} autó foglalt. Felhasználók száma ${this.getUserCount}`
  }
}

const Eng = new Engine();

const arun = autorun(() => {
 
  //alert(Eng.users.length)
})

 autorun(() => {
  console.log(Eng.users.map(u=>u.name))
})

reaction(() => Eng.getUserCount, num => {
  // if (num < 2) {
  //   alert('Még csak kevés felhasználó van: '+num);
  // }
  // else if( num < 4 ) {
  //   alert('Már van pár felhasználó: '+num);
  // }
  // else {
  //   alert('Már sok felhasználó van: '+num);
  // }
})

reaction(() => Eng.getReservedsLength, num => {
  alert(`${num} jármű foglalt!`)
})

 
// Eng.users.push({id:1, name: 'pista' })
// Eng.users.push({id:2, name: 'géza' })
// Eng.users.push({id:3, name: 'jani' })
// Eng.users.push({ id: 4, name: 'misi' })
// Eng.users.push({id:5,  name: 'lajos' })
  


function App() {


  console.group();

  const testarr = [
    {
      id: 1,
      name: 'egy'
    },
    {
      id: 2,
      name: 'kettő'
    }
  ];

  const arrindex = testarr.findIndex(elem => {
    return elem.id == '1';
  });
  
  testarr[arrindex].vehicle_id = 0 
  
  console.log( testarr[ arrindex ] )

  console.groupEnd();

  return (
    <>
    <div className="container">
      <div className='titles'>Összes jármű ({Eng.availables.length})</div>
      <div className='titles'>Ügyfelek ({Eng.users.length})</div>
      <div className='titles'>Foglalt járművek ({Eng.reserveds.length})</div>
    </div>

    <div className='container'>
      <div id='vehicles'>
          {Eng.availables.map((item, index) => <VehicleItem key={ index }>{{item: item}}</VehicleItem>)}
      </div>

      <div id='customers'>
        {Eng.users.map((item, index) => <UserItem key={ index }>{{user: item,
        vehicles: <select onChange={(e)=> Eng.registerVehToUser(e.target.value, item.id)} value={item.vehicle_id}>
          <option value=""> - válasszon járművet - </option>
          {Eng.availables.map((item2, index) => {
            return <option  value={item2.id}   disabled={Eng.reserveds.findIndex(foglalt=>parseInt(foglalt.id) === parseInt(item2.id)) >= 0 ? 'disabled' : ''} key={index}>{item2.model}</option>
          })}
        </select>
        }}</UserItem>)}
      </div>

      <div id='reserved_vehicles'>
        {Eng.reserveds.map((item,index) => <VehicleItem key={ index }>{{item: item, user: Eng.getUserByVehicleId(item.id), delete: <button onClick={()=> Eng.unregisterVehicle(item.id)}>Törlés</button>}}</VehicleItem>)}
      </div>
    </div>

    <div className='container stats'>
      <button onClick={()=> Eng.adduser()}>Új felhasználó</button>
      {Eng.getStats()}
    </div>
    </>);
}

export default observer(App); 
