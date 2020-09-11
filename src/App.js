import React, { Component } from 'react';
import './App.css';
// import data from './data.json';
import Products from './Components/Products';
import Filter from './Components/Filter';
import Cart from './Components/Cart';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  // render on funktio, kuten tiedämme ():stä.

  render() {
    return (
      <Provider store={store}>
        <div className="grid-container" >
          <header>
            <a href="/">React Shopping Cart</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter />
                <Products />
              </div>
              <div className="sidebar">
                <Cart />
              </div>
            </div>
          </main>
          <footer>
            All right's reserved!
      </footer>
        </div>
      </Provider>
    );
  }

}

export default App;
