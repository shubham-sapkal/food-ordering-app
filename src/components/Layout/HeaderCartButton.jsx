import React, { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';

import styles from './HeaderCartButton.module.css';
import CartContext from '../../context/cart.context';

const HeaderCartButton = props => {
    
    const cartCtx = useContext( CartContext );
    
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const numberOfCartItems = cartCtx.items.reduce( ( currNumber, item ) => {
        return currNumber + item.amount;
    }, 0);

    // console.log("NumberOFCartItem: " + numberOfCartItems)

    const btnClasses = `
        ${styles.button} ${ btnIsHighlighted ? styles.bump : '' }
    `;

    // Fetching the items array from the 
    // cartCtx so that state change 
    // only when items state changes 
    const{items} = cartCtx;
    useEffect( () => {
        if(items.length === 0)
        {
            return ;
        }

        const timer = setTimeout( () => {
            setBtnIsHighlighted(false);
        }, 300  );

        setBtnIsHighlighted(true);

        // cleanup function
        return () => {
            clearTimeout(timer);
        };


    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick} >
            {/* Icon  */}
            <span className={styles.icon} >
                <CartIcon />
            </span>
            {/* Label  */}
            <span> Your Cart </span>
            {/* Total amount of cart item  */}
            <span className={styles.badge}> {numberOfCartItems} </span>
        </button> 
    );
}

export default HeaderCartButton;