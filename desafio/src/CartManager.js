export default class CartManager {
  constructor() {
    this.carts = [];
  }

  addCart = async () => {
    const cart = {
      id: null,
      products: [],
    };

    if (this.carts.length === 0) {
      cart.id = 1;
    } else {
      cart.id = this.carts[this.carts.length - 1].id + 1;
    }
    this.carts.push(cart);
  };

  getCartById = async (id) => {
    const cart = this.carts.find((cart) => cart.id === id);
    return cart;
  };

  addProductToCart = async (cid, pid) => {
    const cartIndex = this.carts.findIndex((cart) => cart.id === cid);

    if (cartIndex !== -1) {
      const cart = this.carts[cartIndex];
      const existingProductIndex = cart.products.findIndex(
        (product) => product.product === pid
      );

      if (existingProductIndex !== -1) {
        cart.products[existingProductIndex].quantity += 1;
      } else {
        const product = {
          product: pid,
          quantity: 1,
        };
        cart.products.push(product);
      }
    }
  };
}
