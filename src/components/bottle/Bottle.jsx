import './bottle.css'
const Bottle = ({bottle}) => {
    console.log(bottle)
    const {name, price, img} = bottle;
    return (
        <div className="bottle">
            <h3>Name: {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
        </div>
    );
};

export default Bottle;