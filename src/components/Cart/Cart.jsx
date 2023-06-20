import React, { useContext } from "react";

import styles from './Cart.module.css';
import Modal from "../UI/Modal";

import CartContext from "../../context/cart.context";
import CartItem from "./CartItem";

const Cart = (props) => {

    const cartCtx = useContext(CartContext); 

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItem = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1});
    };

    const cartItems = cartCtx.items.map( item => (
            <CartItem 
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)} />
        ) );

    return (
        <Modal onCloseCart={props.onCloseCart} >
            <ul className={styles['cart-items']}  >
                {cartItems}
            </ul>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={ styles['button--alt'] } onClick={props.onCloseCart} >Close</button>
                {hasItem && <button className={ styles.button }>Order</button> }
            </div>
        </Modal>
    );
};

export default Cart;