const productModel = require('../models/product.model');

async function getAllProducts(queryParams) {
  return await productModel.getAllProduct(queryParams);
}

async function getProductById(id) {
  return await productModel.getProductById(id);
}

async function createProduct(data) {
  return await productModel.createProduct(data);
}

async function updateProduct(id, data) {
  return await productModel.updateProduct(id, data);
}

async function deleteProduct(id) {
  return await productModel.deleteProduct(id);
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
