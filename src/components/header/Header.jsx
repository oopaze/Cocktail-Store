import React from 'react'
import './style.css'
import Icone from '../../assets/img/iconByFreepik.png'
import { RiHeart3Fill, RiShoppingCart2Fill, RiShoppingCart2Line } from "react-icons/ri";

function Header(){
    return (
        <header>
            <img src = {Icone} alt = 'iconHeader' />

            <ul>
                <li>Home</li>
                <li>Cocktails</li>
                <li>Contact us</li>
            </ul>

            {/* <RiShoppingCart2Fill /> */}
            <div className = 'storeLove'>
                <RiHeart3Fill className = 'heart'/>
                <RiShoppingCart2Line className = 'store' />
            </div>
        </header>
    )
}

export default Header