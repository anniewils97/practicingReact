/* in order to display a cake, we need to create a Cake function which takes in a cake object
 as a prop i.e. const Cake (the function) = ({cake}) (the object as a prop, defined specifically
    within this function called Cake).*/

const Cake = ({cake}) => {
    // console.log(Cake);
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
        <button>Sell Cake</button>
        </div>
     );
}
 
export default Cake;