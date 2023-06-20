import React from 'react';

import CartIcon from '../Cart/CartIcon';

import styles from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    return (
        <button className={styles.button} onClick={props.onClick} >
            {/* Icon  */}
            <span className={styles.icon} >
                <CartIcon />
            </span>
            {/* Label  */}
            <span> Your Cart </span>
            {/* Total amount of cart item  */}
            <span className={styles.badge}> 3 </span>
        </button>
    );
}

export default HeaderCartButton;