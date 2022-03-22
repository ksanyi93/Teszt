import React from "react";
import { observer } from "mobx-react-lite";


  function Petlist({ store }) {
    
    const handleAddPet = () => {
        const name = prompt("Name of the pet");
        const type = prompt("Type of the pet");
        const breed = prompt("Breed of the pet");
        const ownerid = prompt("Owner's Id of the pet"); 

        const pet = store.createpet({ id: Date.now(), name, breed, type })
        console.log(pet)
        store.assignownertopet(ownerid, pet.id)
    }

    return <p>{store.storedetails} <button onClick={handleAddPet}>Add</button></p>
}

export default observer(Petlist)