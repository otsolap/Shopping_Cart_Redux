import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import Products from './Components/Products';
import Filter from './Components/Filter';

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

  sortProducts = (event) => {
    const sort = event.target.value;
    // event.target.value kertoo millä perusteella asiakas haluaa nähdä tuotteet.
    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a, b) => (
        sort === 'lowest' ?
          ((a.price > b.price)
            ? 1
            : -1)
          : sort === 'highest'
            ? ((a.price < b.price)
              ? 1
              : -1)
            // uusin eka. ID numerolla se selviää se uusin.
            // eli B.id on loppupäässä.
            : ((a.id < b.id)
              ? 1
              : -1)
      )),
    }))
  }
  filterProducts = (event) => {
    // event.target.value kertoo minkä koon asiakasvalitsi.
    if (event.target.value === "") {
      this.setState({ size: event.target.value, product: data.products });
    } else {
      this.setState({
        size: event.target.value,
        // =>0 - Onko valittu koko valikoimassa? Jos < 0, niin sitä ei Ole ja pitää kertoa asiakkaalle
        // että sorry size not available!
        products: data.products.filter((product) => product.availableSizes.indexOf(event.target.value) >= 0),
      });
    }
  };

  render() {
    return (
      <div className="grid-container" >
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
              <Products products={this.state.products} />
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
