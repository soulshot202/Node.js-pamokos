import express from "express";
import {
  addProductToCategory,
  createCategory,
  createProduct,
  getCategories,
  getCategoryPrice,
  getProducts,
} from "./controler.js";

const router = express.Router();

router.get(`/categories`, getCategories);

router.get(`/products`, getProducts);

router.get(`/categoryvalue`, getCategoryPrice);

router.post(`/category`, createCategory);

router.post(`/product`, createProduct);

router.put(`/category/:categoryId/product/:productId`, addProductToCategory);

export default router;
