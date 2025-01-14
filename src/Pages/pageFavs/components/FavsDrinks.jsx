import React from "react"
import "../pageFavs.css"
import Remove from '../../../components/remove/index'

function FavDrinks(props) {
  return (
    <>
      <div className="drinkShop">
        <img src={props.image} alt="image_cocktail" />
        <div className="drinkShop-texts">
          <p>{props.nameDrink}</p>
          <Remove
            removeDrink={props.removeDrink}
            setArray={props.setArrayFavs}
            nameDrink1={props.nameDrink}
            array={props.arrayFavs}

          />
        </div>
      </div>
      <hr />
    </>
  );
}

export default FavDrinks
