import { useState } from "react";


function Card(props) {

  const [size, setSize] = useState('33%')

  const[img, setImg] = useState(props.img)


    return (


    
        <div style={{ width: size, border: '1px solid grey', padding: 10 }}>

          <button className="btn-sml" onClick={()=> setSize('13%')}>+</button>
          <button className="btn-big" onClick={()=> setSize('66%')}>+</button>
          <button className="btn-huge" onClick={()=> setSize('99%')}>+</button>
          <button className="btn-basic" onClick={()=> setSize('33%')}>+</button>
          
          
          <h3>{props.title}</h3>
          
          <img style={{ width: '100%' }} src={img} alt="" />
          
          <p>{props.descr}</p>

          <button className="btn-change" onClick={()=> setImg('https://www.ford-tartozekok.hu/Content/Images/Slides/slide_2.jpg')}>Change</button>
          
          <button className="btn-back" onClick={()=> setImg(props.img)}>Back</button>

          
        </div>

  
    );
  }
  
  export default Card;