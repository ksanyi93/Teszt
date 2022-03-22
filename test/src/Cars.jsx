import { Card } from 'react-bootstrap';



export default function Cars(props){

    return <>

    <Card.Img src={require('./images/'+props.item.id+'.jpg')} alt="masodik"/>
    
    <details>
    <div className='fs-5 text-white'>{props.item.model}</div>

    <div>{props.item.year}</div>

    <div>{props.item.color}</div>

    <div>{props.item.ccm}</div>

    <div>{props.item.fuel}</div>

    <div>{props.item.performance}</div>

    <div>{props.item.gearbox}</div>

    </details>
    </>
}