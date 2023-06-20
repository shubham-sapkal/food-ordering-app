import React, { Fragment, useState } from 'react';


import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

const App = () => {
  
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <Fragment>
        { cartIsShown && <Cart onCloseCart={hideCartHandler} />}
        <Header 
          onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
    </Fragment>
  );
}

export default App;
