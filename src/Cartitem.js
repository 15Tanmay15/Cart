import React from 'react';
<script src="https://kit.fontawesome.com/f1108a4306.js" crossorigin="anonymous"></script>


class CartItem extends React.Component {
    render(){
        // console.log('this.props', this.props);
        const {price, title, qty} = this.props.product;
        const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = this.props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={
                        {
                            fontSize: 25
                        }
                    }>{title}</div>
                    <div style={
                        {
                            color: "grey"
                        }
                    }>Rs {price}</div>
                    <div style={
                        {
                            color: "grey"
                        }
                    }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/png/512/992/992651.png"
                        onClick={() => onIncreaseQuantity(product)}
                        />
                        <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/png/512/992/992683.png" 
                        onClick={() => {
                            onDecreaseQuantity(product)
                        }}
                        />
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
                        onClick={() => {
                        onDeleteProduct(product.id)
                        }} />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: "lightgrey"
    }
}

export default CartItem;