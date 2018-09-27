import React, { Component } from 'react'

//CSS
import './Menu.css';

//Images
import food from '../../images/header-food.jpg';


class Menu extends Component {
  render() {
    return (
        <div>
            <h2 className='menu__header'>Menu</h2>
            <div className='menu__image-container'>
                <img src={food} alt=''/>
            </div>
            <div className='menu__container'>
                <div className='menu__plates-container'>
                    <h5 className='menu__plates-description'>All plates come with 2 scoops of rice and 1 scoop of mac salad</h5>
                    <h4 className='menu__plates-header'>Combo Plates</h4>
                    <div className='menu__plates-prices'>
                        <div className='menu__plate-type'>
                            <p>1 Meat</p>
                            <p> $9</p>
                        </div>
                        <div className='menu__plate-type'>
                            <p>2 Meats</p>
                            <p>$12</p>
                        </div>
                        <div className='menu__plate-options'>
                            <div className='menu__plate-options-header'>Your choice of:</div>
                            <ul className='menu__plate-meats'>
                                <li> -  Teriyaki Beef</li>
                                <li> -  Teriyaki Chicken</li>
                                <li> -  Garlic Chicken</li>
                                <li> -  Hamburger Steak</li>
                                <li> -  Katsu Chicken</li>
                                <li> -  Pork n' Cabbage</li>
                                <li> -  Roast Pork</li>
                                <li> -  Fish Katsu</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='menu__plates-container'>
                    <h4 className='menu__plates-header'>Specialty Plates</h4>
                        <div className='menu__plate-type'>
                            <p>Kalbi Short Ribs</p>
                            <p>$12</p>
                        </div>
                        <div className='menu__plate-type'>
                            <p>Laulau</p>
                            <p>$10</p>
                        </div>
                        <div className='menu__plate-type'>
                            <p>Garlic Shrimp</p>
                            <p>$14</p>
                        </div>
                        <div className='menu__plate-type'>
                            <p>Teriyaki Chicken Stir-Fry</p>
                            <p>$12</p>
                        </div>
                        <div className='menu__plate-type'>
                            <p>Teriyaki Beef Stir-Fry</p>
                            <p>$12</p>
                        </div>
                        <div className='menu__plate-type'>
                            <p>Butter Garlic Mahimahi</p>
                            <p>$12</p>
                        </div>
                        <div className='menu__plate-type'>
                            <p>Loco Moco</p>
                            <p>$10</p>
                        </div>
                        <div className='menu__plate-type'>
                            <p>Meat Jun</p>
                            <p>$10</p>
                        </div>
                        <div className='menu__plate-type'>
                            <p>Poke Bowl with Rice</p>
                            <p>$12</p>
                        </div>
                </div>
                <div className='menu__plates-container'>
                    <h4 className='menu__plates-header'>Specialty Items</h4>
                        <div className='menu__plate-type'>
                            <p>Spam Musibi</p>
                            <p>$3</p>
                        </div>                       
                        <div className='menu__plate-type'>
                            <p>Shortbread Cookies</p>
                            <p>$5</p>
                        </div>                       
                        <div className='menu__plate-type'>
                            <p>Laulau</p>
                            <p>$5 or 5/$20</p>
                        </div>                       
                </div>
                <div className='menu__plates-container'>
                    <h4 className='menu__plates-header'>Poke</h4>
                        <h5>Poke (Po-kay) is sold by the ounce. We have 2 options:</h5>
                        <div className='menu__poke-options'>
                            <p style={{width: '50%', textAlign: 'center'}}>Shoyu Ahi Poke</p>
                            <p style={{width: '50%', textAlign: 'center'}}>Spicy Mayo Ahi Poke</p>
                        </div>
                        <div className='menu__poke-prices'>
                            <div className='menu__poke'>
                                <p>4 oz</p>
                                <p>$4</p>
                            </div>
                            <div className='menu__poke'>
                                <p>8 oz</p>
                                <p>$8</p>
                            </div>
                            <div className='menu__poke'>
                                <p>16 oz</p>
                                <p>$16</p>
                            </div>
                        </div>
                </div>
                <div className='menu__plates-container'>
                    <h4 className='menu__plates-header'>Otai</h4>
                    <h5>Otai comes in two flavors:</h5>
                    <div className='menu__otai-options'>
                            <p style={{width: '50%', textAlign: 'center'}}>Watermelon</p>
                            <p style={{width: '50%', textAlign: 'center'}}>Mango</p>
                    </div>
                    <div className='menu__poke-prices'>
                        <div className='menu__poke'>
                            <p>Small (16 oz)</p>
                            <p>$4</p>
                        </div>
                        <div className='menu__poke'>
                            <p>Large (32 oz)</p>
                            <p>$7</p>
                        </div>
                    </div>
                </div>
                <div className='menu__daily-specials'>
                    <h4 className='menu__plates-header'>Daily Specials</h4>
                </div>
            </div>
        </div>
     
    )
  }
}

export default Menu;