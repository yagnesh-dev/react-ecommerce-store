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
              text='Technodes has an awesome range of Products. Click here to learn more!!'
              label='Innovation'
              path='/services'
            />
            <CardItem
              src='img/product-2.jpg'
              text='Technodes has an awesome range of Products. Click here to learn more!!'
              label='Technology'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='img/product-3.jpg'
              text='Technodes has an awesome range of Products. Click here to learn more!!'
              label='Robotics'
              path='/services'
            />
            <CardItem
              src='img/product-2.jpg'
              text='Technodes has an awesome range of Products. Click here to learn more!!'
              label='Innovation'
              path='/products'
            />
            <CardItem
              src='img/product-1.jpg'
              text='Technodes has an awesome range of Products. Click here to learn more!!'
              label='Technology'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;