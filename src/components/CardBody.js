// import Button from "./Button";


const CardBody = (props) => {
    console.log('this is props', props);

    return (
        <div className="card-body">
            <h5 className="card-title">SO #: {props.salesOrder}</h5>
            <p className="card-text">Customer: {props.customer}</p>
            <p className="card-text">Assembly #: {props.assemblyNumber}</p>
            <p className="card-text">Assembly Qty: {props.assemblyQty}</p>
        </div>
    )
}

export default CardBody;