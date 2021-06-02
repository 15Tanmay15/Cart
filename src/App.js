import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';

class App extends React.Component{
  constructor (){
    super();
    this.state={
        products: [
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1516&q=80',
                id: 1
            },
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
                id: 2
            },
            {
                price: 9999,
                title: 'Laptop',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
                id: 3
            },
        ]
    }
}
handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty+=1;

    this.setState({
        products
    })
}
handleDecreasingQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if(products[index].qty == 0)
    return;

    products[index].qty -=1;

    this.setState({
        products
    })
}
handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
        products: items
    })
}
getCartCount = () => {
    const {products} = this.state;

    let count = 0;

    products.forEach(product => {
        count+=product.qty;
    });
    return count;
}
getCartTotal = () => {
    const {products} = this.state;
    let price = 0;

    products.forEach(product=>{
        price = price + product.qty * product.price
    })
    return price;
}
    render(){
        const {products} = this.state;
        return (
        <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart 
      products = {products}
      onIncreaseQuantity={this.handleIncreaseQuantity} onDecreaseQuantity={this.handleDecreasingQuantity} onDeleteProduct={this.handleDeleteProduct}
      />
      <div style= {
          {padding: 10, fontSize: 20, fontFamily: 'monospace'}
      }>
         TOTAL: {this.getCartTotal()}
      </div>
    </div>
  );
}
}


export default App;
