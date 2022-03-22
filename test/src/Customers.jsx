import { useState } from 'react';

export default function Customers(props) {

    const [customer, setCustomer] = useState([])



    const addUser = ()=>{
    const nev = prompt('Add meg a neved')
    const email = prompt('Add meg az email címed')
    const phone = prompt('Add meg a telefonszámodat')
    /* setCustomer([nev]) */

    /* const user = customer.concat([nev]) */
    setCustomer(customer.concat([nev], [email], [phone]))
    }

    return <>

        <p>{props.item}</p>

        <select class="form-select" aria-label="Default select example">
            <option selected>Járművek</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </>
}