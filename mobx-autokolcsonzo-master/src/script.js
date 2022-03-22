import Vehicles from './Vehicles.js'
import {GetStatAndAddButton, ListAvailableVehicles, ListReservedVehicles, ListCustomers} from './HTMLContent.js'

//import/export, map

class App{

    customers=[]    
    vehicles = Vehicles;
    reserved_vehicle_ids = []

    addCustomer(data={id:0, vehicle_id:0}) {
        this.customers.push(data)
        return data;
    } 
    
    get listCustomers() {
        return this.customers;
    }

    get listVehicles() {
        return this.vehicles;
    }
    //array filter
    get listActiveCustomers() {
        return this.customers.filter((cus)=>cus.vehicle_id > 0)
    }

    get listInActiveCustomers() {
        return this.customers.filter((cus)=>cus.vehicle_id === 0)
    }

    get listAvailableVehicles() {
        this.listCustomers.forEach(cus => {
            this.reserved_vehicle_ids.push(parseInt(cus.vehicle_id))
        })
  
    
        return this.vehicles.filter((veh) => {
            console.log(veh.id)
            //console.log(reserved_vehicle_ids.indexOf(veh.id))
            return this.reserved_vehicle_ids.indexOf(veh.id) === -1  
        })
    }

    get listReservedVehicles() {  
        this.listCustomers.forEach(cus => {
            this.reserved_vehicle_ids.push(parseInt(cus.vehicle_id))
    })
        //array indexOf
        return this.vehicles.filter((veh) => {
            console.log(veh.id)
            //console.log(reserved_vehicle_ids.indexOf(veh.id))
            return this.reserved_vehicle_ids.indexOf(veh.id) > -1       
        })
    }

    get countCustomers() {
        return this.customers.length;
    }
 
    get countVehicles() {
        return this.vehicles.length;
    }

    get countAvailableVehicles() {
        return this.listAvailableVehicles.length;
    }

    get countReservedVehicles() {
        return this.listReservedVehicles.length;
    }

    addVehicleToCustomer(vehicle_id, customer_id) {
        const customer_index = this.customers.findIndex((cus) => customer_id === cus.id)

        if( customer_index > -1 )
            this.customers[customer_index].vehicle_id = vehicle_id;
    }
}

 
class View{

    get() {
        window.addEventListener('DOMContentLoaded', function () {

            const app = new App();
            
            ListAvailableVehicles(app)
            ListCustomers(app)
            ListReservedVehicles(app)
            GetStatAndAddButton(app)
        
            document.querySelector('#addcustomer').onclick = function () {
                
                const _name = prompt('Név')
                if (!_name) return;
        
                 const customer = app.addCustomer({ id: Math.random(), vehicle_id: 0, name: _name });
        
                ListCustomers(app)
                GetStatAndAddButton(app)
        
                document.querySelectorAll('.addvehicletocustomer').forEach(item => {
                    item.onchange = function () {
                        if (item.value)
                            app.addVehicleToCustomer(item.value, customer.id)
                       
                            ListAvailableVehicles(app)
                            ListReservedVehicles(app)
                            GetStatAndAddButton(app)
                        }
                })
            }
        });
    }
}

const view = new View();
view.get();

