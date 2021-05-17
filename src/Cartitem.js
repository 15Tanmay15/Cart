import React from 'react';

class CartItem extends React.Component {
    constructor (){
        super();
        this.state={
            price: 999,
            title: 'Mobile phone',
            qty: 1,
            img: ''
        }
    }
    render(){
        const {price, title, qty} = this.state;
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
                    }>{this.state.title}</div>
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
                        <img alt="increase" className="action-icons" src="https://img-premium.flaticon.com/png/512/1828/1828926.png?token=exp=1621221536~hmac=4d4f45e2815e46d2d38d683732f93224" />
                        <img alt="decrease" className="action-icons" src="https://img-premium.flaticon.com/png/512/992/992683.png?token=exp=1621221483~hmac=82f77bd771178b126f13c0bcaeefae02" />
                        <img alt="delete" className="action-icons" src="https://img-premium.flaticon.com/png/512/1345/1345874.png?token=exp=1621221572~hmac=0f94eb245e95fead294d7b7691cd65f4" />
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