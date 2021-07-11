// import React from 'react';
// import CardItem from './CardItem';
// import './Cards.css';
// function Cards(){
//     return (<div className="cards">
//         <h1>Check this one out!</h1>
//         <div className="cards__container">
//             <div className="cards__wrapper">
//                 <ul className="cards__item">
//                     <CardItem src="img/product-3.jpg" label ="Electronics" path="/products" text="Explore the new world of electronics here"/>
//                     <CardItem src="img/product-2.jpg" label ="Electronics" path="/products" text="Explore the new world of electronics here"/>
//                 </ul>
//                 <ul className="cards__item">
//                     <CardItem src="img/product-3.jpg" label ="Electronics" path="/products" text="Explore the new world of electronics here"/>
//                     <CardItem src="img/product-2.jpg" label ="Electronics" path="/products" text="Explore the new world of electronics here"/>
//                     <CardItem src="img/product-1.jpg" label ="Electronics" path="/products" text="Explore the new world of electronics here"/>
//                 </ul>
//             </div>
//         </div>
//     </div>);

// }

// export default Cards;
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Great Products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='img/product-3.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='img/product-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='img/product-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='img/product-2.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='img/product-1.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;