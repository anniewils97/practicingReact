
/* in order to display a cake, we need to create a Cake function which takes in a cake object
 as a prop i.e. const Cake (the function) = ({cake}) (the object as a prop, defined specifically
    within this function called Cake).*/

const Cake = ({ cake, onButtonClick }) => {
    // console.log(Cake);

    const handleButton = () => {
        onButtonClick(cake.cakeName, cake.price);
        /* initially ran into an error because we had onButtonClick({cake.CakeName, cake.price})
        in order for the {} to work, they need a key-value pair passed as an argument, but cake.cakeName, cake.price
        are just values of a property, not a key-value pair.
        */
    };

    return ( 
        <div className="cake">
        <h3>{cake.cakeName}</h3>
        <h3>Ingredients:</h3>
        <ul>
                {cake.ingredients.map( ingredient => {
                    return <li>{ingredient}</li>
                })}
            </ul>
        <p>Price: £{cake.price}</p>
        <p>Rating: {cake.rating}</p>
        <button onClick={onButtonClick}>Sell Cake</button>
        </div>
     );
}
 
export default Cake;