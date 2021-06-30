import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';
import firebase from 'firebase';

class App extends React.Component{
  constructor (){
    super();
    this.state={
        products: [],
        loading: true
    }
    this.db = firebase.firestore();
}

componentDidMount(){
    // firebase
    //     .firestore()
    //     .collection('products')
    //     .get()
    //         .then((snapshot) => {
    //             console.log(snapshot);

    //             snapshot.docs.map((doc) => {
    //                 console.log(doc.data())
    //             });

    //             const products = snapshot.docs.map((doc)=>{
    //                 const data = doc.data();

    //                 data['id'] = doc.id;
    //                 return data;
    //             })

    //             this.setState({
    //                 products,
    //                 loading: false
    //             })
    //         })

    firebase
        .firestore()
        .collection('products')
        .onSnapshot((snapshot) => {
            console.log(snapshot);

            snapshot.docs.map((doc) => {
                console.log(doc.data())
            });

            const products = snapshot.docs.map((doc)=>{
                const data = doc.data();

                data['id'] = doc.id;
                return data;
            })

            this.setState({
                products,
                loading: false
            })
        })
}

handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty+=1;

    // this.setState({
    //     products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef.update(
        {
            qty: products[index].qty + 1
        }
    ).then(()=>{
        console.log('Updated successfully')
    }).catch((error)=>{
        console.log('Error: ', error)
    })
}
handleDecreasingQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    const docRef = this.db.collection('products').doc(products[index].id);

    if(products[index].qty == 0)
    return;

    docRef.update({
            qty: products[index].qty - 1
    }).then(()=>{
        console.log('Updated successfully')
    }).catch((error)=>{
        console.log('Error: ', error)
    })
}
handleDeleteProduct = (id) => {
    const { products } = this.state;

    const docRef = this.db.collection('products').doc(id);

    docRef.delete().then(()=>{
        console.log('Deleted successfully')
    }).catch((error)=>{
        console.log('Error: ', error)
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

    addProduct = () => {
        this.db
            .collection('products')
            .add({
                img: 'https://www.lg.com/in/images/washing-machines/md07518468/gallery/FHV1207ZWB-Washing-Machines-Right-View-D-06.jpg',
                price: 18000,
                qty: 3,
                title: 'washing machine'
            })
            .then((docRef) => {
                console.log('Product has been added', docRef)
            })
            .catch((error) => {
                console.log('Error : ', error)
            })
    }
    render(){
        const {products, loading} = this.state;
        return (
        <div className="App">
      <Navbar count={this.getCartCount()}/>
      {/* <button onClick={this.addProduct} style={{
          padding: 10, fontSize: 15
      }}>Add a product</button> */}
      <Cart 
      products = {products}
      onIncreaseQuantity={this.handleIncreaseQuantity} onDecreaseQuantity={this.handleDecreasingQuantity} onDeleteProduct={this.handleDeleteProduct}
      />
      {loading && <h1>Loading Products ...</h1>}
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
