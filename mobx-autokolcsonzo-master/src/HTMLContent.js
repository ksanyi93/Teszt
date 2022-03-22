
const VehicleItem = (props) => <><div className="vehicleitem">
    <div><img src={require('./images/' + props.children.item.id + '.jpg').default} />
    </div>
    <div>{props.children.item.model}<hr />{props.children.delete ? props.children.delete : ''} </div>
</div>
    <details>
        <dl>
        <b>user:</b> { props.children.user && props.children.user.name }    <br />
        <b>évjárat:</b> {props.children.item.year} <br />
        <b>szín:</b> {props.children.item.color} <br />
        <b>löket.t.:</b> {props.children.item.ccm} <br />
        <b>üzemanyag:</b> {props.children.item.fuel} <br />
        <b>teljesítmény:</b> {props.children.item.performance} <br />
        <b>váltó:</b> {props.children.item.gearbox} 
        
            
    </dl>
     
    </details></>



const UserItem = (props) => <><div className="useritem">
     
    <div>{props.children.user.name} </div>
    <div>{props.children.vehicles}</div>
</div>
    <details> 
    <dl> 
        <b>cím:</b> {props.children.user.address} <br />
        <b>email:</b> {props.children.user.email} <br />
        <b>telefon:</b> {props.children.user.tel} <br />
        <b>határidő:</b> {props.children.user.deadline} <br />
       
    </dl>
     
</details></>

 
 

export { VehicleItem, UserItem}