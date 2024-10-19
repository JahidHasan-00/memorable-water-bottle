import PropTypes from 'prop-types'
import './bottle.css'
const Bottle = ({bottle, handleAddToCard}) => {
    // console.log(bottle)
    const {name, price, img} = bottle;
    return (
        <div className="bottle">
            <h3>Name: {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCard(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCard: PropTypes.func.isRequired
}
export default Bottle;