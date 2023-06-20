import React, { useContext } from "react";

import styles from './MealItem.module.css';
import MealItemForm from "./MealItemForm";
import CartContext from "../../../context/cart.context";
const MealItem = props => {

    const cartCtx = useContext(CartContext);

    const price = `$${props.meal.price.toFixed(2)}`;

    const addToCartHandler = amount => {

        console.log("id" + props.meal.id + 
            "name" + props.meal.name +
            "amount" + amount +
            "price" + props.meal.price);

        cartCtx.addItem({
            id: props.meal.id,
            name: props.meal.name,
            amount: amount,
            price: props.meal.price
        });
        console.log("item added!");
    }

    return (
        <li className={styles.meal}>
            <div>
                <h3> {props.meal.name} </h3>
                <div className={styles.desciption}> {props.meal.description} </div>
                <div className={styles.price}> {price} </div>
            </div>
            <div>
                <MealItemForm 
                    onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;