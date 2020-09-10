import React, { Component } from 'react'
import formatCurrency from '../util';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            address: "",
            showCheckout: false
        };
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: [event.target.value]
        });
    }

    createOrder = (event) => {
        event.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems
        };
        this.props.createOrder(order);
    }

    render() {
        // State antaa meille CartItemssin.
        // Jota sovellamme propsina.
        const { cartItems } = this.props;
        return (
            <div>
                {cartItems.length === 0 ? (
                    <div className="cart cart-header">Cart is Empty </div>
                ) : (
                        <div className="cart cart-header">
                            You have {cartItems.length} in your cart. {" "}
                        </div>
                    )}
                <div>
                    <div className="cart">
                        <ul className="cart-items">
                            {cartItems.map((item) => (
                                <li key={item.id}>
                                    <div>
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div>
                                        <div> {item.title} </div>
                                        <div className="right">
                                            {formatCurrency(item.price)} x {item.count} {" "}
                                            <button
                                                className="button"
                                                onClick={() => this.props.removeFromCart(item)}>
                                                Remove
                                </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {cartItems.length !== 0 && (
                        <div>
                            <div className="cart">
                                <div className="total">
                                    <div>
                                        Total: {" "}
                                        {formatCurrency(
                                            cartItems.reduce((a, c) => a + c.price * c.count, 0)
                                        )}
                                    </div>
                                    <button onClick={() => { this.setState({ showCheckout: true }) }}
                                        className="button primary"
                                    >
                                        Proceed
                                    </button>
                                </div>
                            </div>
                            {this.state.showCheckout && (
                                <div className="cart">
                                    <form onSubmit={this.createOrder}>
                                        <ul className="form-container">
                                            <li>
                                                <label>Email</label>
                                                <input type="email"
                                                    name="email"
                                                    required
                                                    onChange={this.handleInput}
                                                ></input>
                                            </li>
                                            <li>
                                                <label>className</label>
                                                <input type="text"
                                                    name="name"
                                                    required
                                                    onChange={this.handleInput}
                                                ></input>
                                            </li>
                                            <li>
                                                <label>Addresss</label>
                                                <input type="text"
                                                    required
                                                    name="address"
                                                    onChange={this.handleInput}
                                                ></input>
                                            </li>
                                            <li>
                                                <button className="button primary" type="submit">Checkout</button>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div >
        )
    }
}
