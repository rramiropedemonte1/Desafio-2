class ProductManager {
  constructor() {
    this.products = [];
  }

  static id = 0;

  addProduct(title, description, price, img, code, stock) {
    ProductManager.id++;
    this.products.push({
      title,
      description,
      price,
      img,
      code,
      stock,
      id: ProductManager.id,
    });
  }

  getProduct() {
    return this.products;
  }

  getProductById(id) {
    if (this.products.find((producto) => producto.id === id)) {
      console.log("Si existe");
    } else {
      console.log("Error 404");
    }
  }

  deleteProduct(id) {
    this.products = this.getProducts();
    const product = this.getProductById(id);
    if (!product) {
      console.error(`The product id: ${id} does not exist`);
    } else {
      this.products = this.products.filter((prod) => prod.id !== product.id);
      this.saveProductsInJSON();
      console.log(`Product id: ${product.id} has been deleted`);
    }
  }

  updateProduct(id, product) {
    this.products = this.getProducts();
    let position = this.products.findIndex((prod) => prod.id === id);

    if (position === -1) {
      console.error(`The product id: ${id} does not exist`);
    } else {
      this.products[position].title = product.title;
      this.products[position].description = product.description;
      this.products[position].price = product.price;
      this.products[position].img = product.img;
      this.products[position].code = product.code;
      this.products[position].stock = product.stock;
      console.log("Product updated!");
    }
  }
}

const productos = new ProductManager();

productos.addProduct("titulo1", "descripcion1", 500, "imagen1", "1234", 5);
productos.addProduct("titulo2", "descripcion2", 800, "imagen2", "8907", 9);

console.log(productos.getProduct());

productos.getProductById(2);
