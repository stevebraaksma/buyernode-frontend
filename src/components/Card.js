import CardBody from "./CardBody";

const Card = (props) => {
    return (
        <div className="card">
            <CardBody 
                salesOrder={props.salesOrder} 
                customer={props.customer} 
                assemblyNumber={props.assemblyNumber} 
                assemblyQty={props.assemblyQty} 

            />
        </div>
    )
}

export default Card;