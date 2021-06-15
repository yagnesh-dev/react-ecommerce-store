import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
function Cards(){
    return (<div className="cards">
        <h1>Check this one out!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__item">
                    <CardItem src="img/product-3.jpg" label ="Adventure" path="/products" text="Explore the new world of electronics here"/>
                </ul>
            </div>
        </div>
    </div>);

}

export default Cards;