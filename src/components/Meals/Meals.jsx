import React from 'react';
import AvailableMeals from './AvailableMeals';
import MealSummary from './MealsSummary';

const Meals = () => {

    return (
        <React.Fragment>
            <MealSummary />
            <AvailableMeals />
        </React.Fragment>
    );

};

export default Meals;