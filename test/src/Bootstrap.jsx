import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vehicles from './Vehicles';
import Cars from './Cars';
import { useState } from 'react';



export default function App() {


    


    function AddUser(){

    

        const nev = prompt('Add meg a neved')
        console.log(nev)
    
        
        
    }

    const[value, setValue] = useState('Jani')

    return <>

        <Container fluid>
            <Row>
                <Col className='bg-primary text-white text-center'>Összes jármű</Col>

                <Col className='bg-warning text-white text-center'>Ügyfelek</Col>

                <Col className='bg-success text-white text-center'>Foglalt járművek</Col>
            </Row>

            <Row>
                <Col className='bg-danger'>

                    <div> {Vehicles.map(function (item, index) {
                        return <>
                            <Cars item={item} />
                        </>
                    })} </div>
                </Col>

                <Col className='bg-secondary text-center text-warning'>
                    <div id='users'>
                        {value.nev}
                    </div>
                </Col>

                <Col className='bg-info text-end'>C</Col>

            </Row>



        </Container>

        <Container fluid className='bg-warning position-fixed bottom-0 start-50 translate-middle-x'>
            <Card.Footer className='text-center'> <Button onClick={()=>{AddUser()} } className='bg-body text-primary border border-primary'>Új felhasználó</Button >Footer</Card.Footer>
        </Container>


    </>
}


/* function AddUser(){

    

    const nev = prompt('Add meg a neved', 'Sanyi')
    console.log(nev)

    const[value, setValue] = useState(nev)


    
} */