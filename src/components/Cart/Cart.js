import React, { Component } from "react";
import Title from "../Title";
import CardColumns from "./CardColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from './CartList';
import CartTotals from './CartTotals';
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            return cart.length > 0 ? (
              <React.Fragment>
                <Title name="Your " title="Cart" />
                <CardColumns />
                <CartList value={value}/>
                <CartTotals value={value} history={this.props.history}/>
              </React.Fragment>
            ) : (
              <EmptyCart />
            );
          }}
        </ProductConsumer>
      </section>
    );
  }
}
