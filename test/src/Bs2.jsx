import { Button, Container, Row, Col, Alert, Stack, Form, FormGroup, FormControl, FormLabel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Bs2.css";
import Vehicles from './Vehicles';
import Cars from './Cars';
import { useState } from 'react';
import Customers from './Customers';
import { useEffect } from 'react';




export default function Auto() {

    const [customer, setCustomer] = useState([])
    const[state, setState] = useState()
    const [reserved, setReserved] = useState([])

    const addUser = () => {
        const nev = prompt('Add meg a neved')
        /* setCustomer([nev]) */
        const user = {id: new Date().getTime(), name: nev};
        /* const user = customer.concat([nev]) */
        setCustomer(customer.concat([user]))
    }

    useEffect(() => {
        console.log(reserved)
    })


    const removeReserved = (userid) => {

        const foglaltak = reserved;
        
        const foglaltindex = foglaltak.findIndex(f=>f.user == userid)

        foglaltak.splice(foglaltindex, 1)
        setReserved([...foglaltak]);
    }

    return <>
        <Container fluid className='bg-body text-dark'>
            <Row id="first_row" classNme="justify-content-md-center">
                <Col className='bg-warning text-dark text-center fs-4'>Összes jármű</Col>

                <Col className="bg-secondary text-white text-center fs-4">Ügyfelek</Col>

                <Col className='bg-success text-white text-center fs-4'>Foglalt járművek</Col>
            </Row>

            <Row>
                <Col className='bg-primary text-dark text-center'>



                    {/* <Card.Img src={require('./images/1.jpg')} alt="elso" /> */}


                    <div>{Vehicles.map(function (item, index) {
                        return <>
                            <Cars item={item}/>
                        </>
                    })} </div>



                </Col>

                <Col className='bg-danger text-dark text-center'>

                    <div>
                        {customer.map(function (item, index) {

                            return <>
                                <p>{item.name}</p>
                                <select onChange={(e)=>setState(e.target.value)} class="form-select" aria-label="Default select example">
                                    <option selected>Válassz járművet</option>
                                    
                                    {Vehicles.map(function(item,index){
                                        return <>
                                        <option value={item.id}>{item.model}</option>
                                        
                                        </>
                                    })}
                                    
                                </select>
                                <button onClick={()=>{
                                    
                                    return setReserved([...reserved, {user: item.id, vehic: state}])
                                
                                }}>Kiválasztás</button>
                                
                            </>
                        })}
                        
                    </div>
                    

                </Col>

                <Col className='bg-info text-dark text-end'>
                    <div>
                        {reserved.map(function (item, index) {
                            
                            /* user adatai */
                            const userindex = customer.findIndex(u => u.id == item.user)
                            
                            const user = customer[userindex]

                            /* jármű adatai */
                            const vehicleindex = Vehicles.findIndex(v => v.id == item.vehic)

                            const cars = Vehicles[vehicleindex]

                            return <>
                                 
                                <Cars
                                    item={cars} user={user}
                                    handlereserved={removeReserved}
                                    vehicleindex={vehicleindex}
                                
                                    reserved={reserved} />
                            </>
                        })}
                    </div>
                </Col>


            </Row>

        </Container>




        <Container fluid className='position-fixed bottom-0 start-50 translate-middle-x bg-warning'>
            <Row>
                <Col className='text-center'><Button className='button' onClick={() => { addUser() }}>Új felhasználó</Button> Footer</Col>
            </Row>
        </Container>
    </>
}

/* function addUser(){
    const nev = prompt('Add meg a neved')
    alert(nev)

} */
