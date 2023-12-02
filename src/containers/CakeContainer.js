import { useState } from "react";
import Cake from "../components/Cake";

const CakeContainer = () => {

    const [cakes, setCakes] = useState(
        [
            // Victora Sponge
{
	cakeName: "Victoria Sponge",
   	ingredients: [
   		"eggs",
      	"butter",
      	"sugar",
      	"self-raising flour",
      	"baking powder",
      	"milk"
  	],
  	price: 5,
   	rating: 5
},

// Tea Loaf
{
 	cakeName: "Tea Loaf",
   	ingredients: [
   		"eggs",
      	"oil",
      	"dried fruit",
      	"sugar",
      	"self-raising flour",
      	"strong tea",
  	],
  	price: 2,
  	rating: 3
},

// Carrot Cake
{
 	cakeName: "Carrot Cake",
   	ingredients: [
    	"carrots",
      	"walnuts",
      	"oil",
      	"cream cheese",
      	"flour",
      	"sugar",
   	],
   	price: 8,
   	rating: 5
} 
        ]
    )

    const averageRating = cakes.reduce((sum, cake) => sum + cake.rating, 0) / cakes.length || 0;
    console.log(averageRating);

/* The mappedCakes function in your code is responsible for rendering the cake 
components on the page. It does this by mapping over the cakes array and 
returning a new Cake component for each cake in the array. If you don't include 
the mappedCakes function in your return statement, React won't have any instructions 
to render the cakes. This is because the mappedCakes function is what transforms your 
cake data into Cake components that can be displayed on the page. */

    const mappedCakes = cakes.map((cake, id) => {
        return <Cake cake={cake}/>
    })

    return ( 
        <>
        <h2>Cakes on Offer:</h2>
        {mappedCakes}
        <p>Total sales:</p>
        <p>Total cakes sold:</p>
        {averageRating}
        </>
     );
}
 
export default CakeContainer;