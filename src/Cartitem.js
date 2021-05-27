import React from 'react';
<script src="https://kit.fontawesome.com/f1108a4306.js" crossorigin="anonymous"></script>


class CartItem extends React.Component {
    
    increaseQuantity = () => {
        // setState form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // })
        // setState form 2
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        }, () => {
            console.log('this.state', this.state);
        });
    }

    
    decreaseQuantity = () => {
        this.setState((prevState) => {
            if(prevState.qty > 0){
            return {
                qty: prevState.qty - 1
            }
        }
        });
    }
    render(){
        const {price, title, qty} = this.props.product;
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
                        onClick={this.increaseQuantity}
                        />
                        <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/png/512/992/992683.png" 
                        onClick={this.decreaseQuantity}
                        />
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/png/512/1214/1214428.png" />
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