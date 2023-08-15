import { Router } from "express";
import ProductManager from "../ProductManager.js";

const router = Router();

const productManager = new ProductManager();

router.get("/", async (req, res) => {
  const products = await productManager.getProduct();
  const limit = +req.query.limit;
  let result = products;

  if (limit) {
    result = products.slice(0, limit);
  }
  res.send(result);
});

router.get("/:pid", async (req, res) => {
  const pid = +req.params.pid;
  const product = await productManager.getProductById(pid);

  if (!product) {
    res.send({
      status: "error",
      message: `No existe el producto  con el id ${pid}`,
    });
    return;
  }
  res.send(product);
});

router.post("/", async (req, res) => {
  const newProduct = req.body;
  const addedProduct = await productManager.addProduct(
    newProduct["title"],
    newProduct["description"],
    newProduct["price"],
    newProduct["thumbnail"],
    newProduct["code"],
    newProduct["stock"],
    newProduct["category"],
    newProduct["status"]
  );
  if (addedProduct)
    res.json({ message: "Producto agregado exitosamente.", addedProduct });
  else res.json({ message: "Error. El producto no se ha podido agregar." });
});

router.put("/:pid", async (req, res) => {
  const pid = +req.params.pid;
  const product = await productManager.getProductById(pid);

  if (!product) {
    res.send({
      status: "error",
      message: `No existe el producto con el id ${pid}`,
    });
    return;
  }
  const updateProduct = req.body;
  await productManager.updateProduct(product.id, updateProduct);
  res.send({ status: "success" });
});

router.delete("/:pid", async (req, res) => {
  const pid = +req.params.pid;
  const product = await productManager.getProductById(pid);

  if (!product) {
    res.send({
      status: "error",
      message: `No existe el producto con el id ${pid}`,
    });
    return;
  }

  await productManager.deleteProduct(product.id);
  res.send({ status: "success" });
});

export default router;
