 
import {
    action,
    computed,
    makeObservable,
    observable,
    autorun,
    runInAction,
  } from "mobx";
class petownerstore {
    pets = []
    owners = []

    constructor() {
        //A makeObservable a komponenst observable -  megfigyelhető állapotba helyezi
        //2 paramétert fogad: a megfigyelhető objektumot, és annak az objektumba zárt konfigurációs definicióját 
        makeObservable(this, {
          pets: observable, //observable : klónozza az objektumot és megfigyelhetővé teszi. object, array, set, map, 
          owners: observable,
          totalowners: computed, //computed: kalkulált, observable érték, amely más megfigyelhető értékekből származik. Mindaddig amig a kalkuláció alapját képező értékek nem változnak meg, nem kerül újraszámolásra
          totalpets: computed,
          storedetails: computed,
          getpetsbyownerid: action, //action: azon metódusokon használjuk, amelyek a state-ek változtatását végzik
          createpet: action,
          createowner: action 
        });
        autorun(this.logdetails); //automatikus végrehajtás amikor az értékek változnak
      }

    createpet(pet = {id:0, name: '', type: '', breed: '', owner: null}) {
        this.pets.push(pet)
        return pet;
    }

    createowner(owner = { id: 0, fname: '', lname: '' }) {
        this.owners.push(owner)
    }

    updateowner(ownerid, data) {
        const ownerindex = this.owners.findIndex((owner) => owner.id === ownerid);
        if (ownerindex > -1 && data) {
            this.owners[ownerindex] = data;
        }
    }

    updatepet(petid, data) {
        const petindex = this.pets.findIndex((pet) => pet.id === petid);
        if (petindex > -1 && data) {
            this.pets[petindex] = data;
        }
    }

    deletepet(petid) {
        const petindex = this.pets.findIndex((pet) => pet.id === petid);
        if (petindex > -1) {
            this.pets.splice(petindex, 1)
        }
    }

    deleteowner(ownerid) {
        const ownerindex = this.owners.findIndex((owner) => owner.id === ownerid);
        if (ownerindex > -1) {
            this.owners.splice(ownerindex, 1);
        }
    }

    get totalowners() {
        return this.owners.length 
    }

    get totalpets() {
        return this.pets.length
    }

    getpetsbyownerid(id) {
        return this.pets.filter(pet => {
            return pet.owner.id === id
        })
    }

    assignownertopet(ownerid, petid) {
       const ownerindex = this.owners.findIndex((owner) =>   owner.id === ownerid  )
       const petindex = this.pets.findIndex(pet => pet.id === petid)
        
        this.pets[petindex].owner = this.owners[ownerindex]
    }

    get storedetails() {
        return `Összesen ${this.totalpets} háziállat és ${this.totalowners} állat tulajdonos van!`
    }

    logdetails() {
        console.log( this.storedetails )
    }
}

/*
const store = new petownerstore();

store.createpet({
    id: 1,
    name: "Bingo",
    type: "Dog",
    breed: "alsertian",
});


store.createpet({
    id: 2,
    name: "Lloyd",
    type: "Cat",
    breed: "winky",
});
  */
// store.createowner({ id: 1, firstName: "Burai", lastName: "Sanyi" });

// store.logdetails()


export default petownerstore;