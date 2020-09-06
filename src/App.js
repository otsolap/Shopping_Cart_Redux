import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import Products from './Components/Products';

class App extends Component {
  // render on funktio, kuten tiedämme ():stä.
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    }
  }
  render() {
    return (
      <div className="grid-container" >
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar"> Cart Items</div>
          </div>
        </main>
        <footer>
          All right's reserved!
        </footer>
      </div>
    );
  }

}

export default App;
