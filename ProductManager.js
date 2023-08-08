class ProductManager {
  constructor() {
    this.products = [];
    this.id = 0;
  }

  addProduct(title, description, price, img, code, stock) {
    this.id++;
    this.products.push({
      title,
      description,
      price,
      img,
      code,
      stock,
      id: this.id,
    });
  }

  getProduct() {
    return this.products;
  }

  getProductById(id) {
    return this.products.find((producto) => producto.id === id);
  }

  deleteProduct(id) {
    const product = this.getProductById(id);
    if (!product) {
      console.error(`The product id: ${id} does not exist`);
    } else {
      this.products = this.products.filter((prod) => prod.id !== product.id);
      console.log(`Product id: ${product.id} has been deleted`);
    }
  }

  updateProduct(id, updatedProduct) {
    const product = this.getProductById(id);
    if (!product) {
      console.error(`The product id: ${id} does not exist`);
    } else {
      Object.assign(product, updatedProduct);
      console.log("Product updated!");
    }
  }
}

const productos = new ProductManager();

productos.addProduct("titulo1", "descripcion1", 500, "imagen1", "1234", 5);
productos.addProduct("titulo2", "descripcion2", 800, "imagen2", "8907", 9);

console.log(productos.getProduct());

const productToUpdate = {
  title: "New Title",
  description: "New Description",
  price: 1000,
  img: "new-image",
  code: "new-code",
  stock: 10,
};
productos.updateProduct(1, productToUpdate);

console.log(productos.getProduct());

productos.deleteProduct(2);

console.log(productos.getProduct());

module.exports = ProductManager;
