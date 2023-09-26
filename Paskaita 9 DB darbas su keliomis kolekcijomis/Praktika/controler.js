import mongoose from "mongoose";
import Category from "./model/Category.js";
import Product from "./model/Product.js";

export async function createCategory(req, res) {
  const { title, description } = req.body;
  try {
    const category = new Category({ title, description });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createProduct(req, res) {
  const { name, price } = req.body;
  try {
    const product = new Product({ name, price });
    await product.save();

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addProductToCategory(req, res) {
  const { categoryId, productId } = req.params;
  try {
    const productMongoId = new mongoose.Types.ObjectId(productId);
    const category = await Category.findById(categoryId);
    category.products.push(productMongoId);

    await category.save();

    const categoryMongoId = new mongoose.Types.ObjectId(categoryId);
    const product = await Product.findById(productId);

    product.category = categoryMongoId;
    await product.save();

    res.json({ message: "Product added to category" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getCategories(req, res) {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getProducts(req, res) {
  try {
    const products = await Product.find(
      {},
      { _id: 0, name: 1, price: 1, category: 1 }
    ).populate({ path: "category", select: "title" });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getCategoryPrice(req, res) {
  const categories = await Category.find({}, { title: 1 });
  const products = await Product.find({}, { price: 1, category: 1 });
  const values = categories.map((category) => {
    let title = category.title;
    let price = 0;
    products.forEach((product) => {
      if (product.category === category._id) {
        price++;
      }
      //return price;
    });
  });

  res.status(200).json(values);

  //   try {
  //     const category = await Category.findById(categoryId);
  //     res.json(category.price);
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
}
