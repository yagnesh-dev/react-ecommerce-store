import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    isModalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  componentDidMount() {
    this.setProducts();
  }
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState({
      detailProduct: product,
    });
  };
  addToCart = (id) => {
    const allProduct = [...this.state.products];
    const index = allProduct.indexOf(
      this.getItem(id)
    ); /*NOTE :we need this to keep the product in same place and not push in the last of list  */
    const product = allProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      {
        products: allProduct,
        cart: [...this.state.cart, product],
      },
      () => {
        this.addTotals();
      }
    );
  };
  setProducts = () => {
    let products = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState({
      products,
    });
  };
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count++;
    product.total = product.count * product.price;
    this.setState(
      {
        cart: [...tempCart],
      },
      () => {
        this.addTotals();
      }
    );

  };
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count--;
    if(product.count === 0){
      this.removeItem(id);
    }else{
      product.total = product.count * product.price;
      this.setState(
        {
          cart: [...tempCart],
        },
        () => {
          this.addTotals();
        }
      );
    }
   
  };
  removeItem = (id) => {
    let allProduct = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = allProduct.indexOf(this.getItem(id));
    let removedProduct = allProduct[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(
      {
        cart: [...tempCart],
        products: [...allProduct],
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearCart = () => {
    this.setState(
      {
        cart: [],
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState({
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total,
    });
  };
  // tester = () => {
  //   console.log("Before this.state.products", this.state.products[0].inCart);
  //   console.log("Before storeProducts", storeProducts[0].inCart);
  //   let TempArray = [...this.state.products];
  //   this.setState(
  //     {
  //       products: TempArray,
  //     },
  //     () => {
  //       console.log("After this.state.products", this.state.products[0].inCart);
  //       console.log("After storeProducts", storeProducts[0].inCart);
  //     }
  //   );
  // };
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState({
      modalProduct: product,
      isModalOpen: true,
    });
  };
  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
