/* Ei tarvita Reduxin jälkeen

createOrder = (order) => {
    alert('We need to save order for ' + order.name)
  }


Ei tarvita Reduxin jälkeen
removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
        cartItems: cartItems.filter((x) => x.id !== product.id),
    })

}
Ei tarvita Reduxin jälkeen
addToCart = (product) => {
    // slice => kopioitu versio. Ei state mutaatiota. ,-)
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
        if (item.id === product.id) {
            item.count++;
            alreadyInCart = true;
        }
    });
    if (!alreadyInCart) {
        cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
    localStorage.setItem('cartItems', JSON.stringify(this.state.cartItems));
}
* /

/* Ei tarvita Reduxin jälkeen
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
  } */


/* React-Reduxin jälkeen ei tarvita.
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
*/