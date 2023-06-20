import React from 'react';

import styles from './Input.module.css';

const Input = (props) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id} > {props.label} </label>
            <input 
                // id={props.input.id} 
                // Spitting the props of the input
                {...props.input} />     
        </div>
    );
}

export default Input;