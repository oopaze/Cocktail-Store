import React from 'react'
import DrinkShop from './DrinksShop'
import './shopping.css'
import ButtonReturn from '../../components/buttonReturn/ButtonReturn'

function Shopping(props){

    console.log(props.arrayShop)

    return (
        <section className = 'container-bg'>
            <div className = 'container-Shop-all'>
                <div className = 'containerShop-bg'>
                    <h1 className = 'tittle-Shop'>Shopping</h1>
                    <p><span>PROMOTION:</span> All drinks for $59.99!</p>
                    <div className = 'containerShop-drinks'>
                        {
                            props.arrayShop.map( el => 
                                <DrinkShop 
                                    image = {el.srcImg}
                                    nameDrink = {el.nameDrink}
                                />
                            )
                        }
                    </div>
                </div>
                <div className = 'buttons'>
                    <ButtonReturn />
                    <button className = 'buttonBuy'>Buy</button>
                </div>
            </div>
        </section>
    )
}

export default Shopping