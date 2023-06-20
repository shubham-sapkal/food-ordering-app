import { useReducer } from "react";

import CartContext from "./cart.context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};


const cartReducer = (state, action) => {

    if(action.type === 'ADD_ITEM'){
        
        // updateing total amount
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
        
        // checking item exist
        const existingCartItemIndex= state.items.findIndex( item => (
            item.id === action.item.id
        ));

        const existingCartItem = state.items[existingCartItemIndex];

        // addding item to items array
        let updatedItems;

        if(existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            // updatedItem = {...action.item};    
            updatedItems = state.items.concat(action.item);
        }

        console.log("Updated Amount: " + updatedAmount);

        return {
            items: updatedItems,
            totalAmount: updatedAmount
        };
        
    } 

    if(action.type === 'REMOVE_ITEM'){

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        const existingItem = state.items[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;
        if(existingItem.amount === 1)
        {
            updatedItems = state.items.filter( (item) => (
                item.id !== action.id
            ) );
        }
        else{
            const updatedItem = {...existingItem, amount: existingItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };

    }
    

    return defaultCartState;

};


const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = InputItem => {
        console.log("Items Received!!");
        dispatchCartAction({
            type: 'ADD_ITEM',
            item: InputItem
        });
    }

    const removeItemHandler = id => {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            id: id
        });
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler 
    }

    return (
        <CartContext.Provider
            value={cartContext} >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider