const services = require("../Services/productServices.js");

class ProductController {
  static getAllAvailableProduct = async () => {
    try {
      let productsData = await services.getAllAvaiableProducts();
      return productsData.recordsets[0];
    } catch (err) {
      console.log(err);
    }
  };

  static getProductById = async (id) => {
    try {
      let productData = await services.getProductById(id);
      return productData.recordset;
    } catch (err) {
      console.log(err);
    }
  };

  static insertProduct = async (insertData) => {
    try {
      await services.insertProduct(insertData);
    } catch (err) {
      console.log(err);
    }
  };

  static updateProductDetailsById = async (data, productId) => {
    try {
      await services.updateProductDetailsById(data, productId);
    } catch (err) {
      console.log(err);
    }
  };

  static updateProductQuantityById = async (productQuantity, productId) => {
    try {
      await services.updateProductQuantityById(productQuantity, productId);
    } catch (err) {
      console.log(err);
    }
  };

  static deleteProductById = async (id) => {
    try {
      await services.deleteProductById(id);
    } catch (err) {
      console.log(err);
    }
  };

  static getAllAvailableProductDetails = async () => {
    try {
      let productsData = await services.getAllAvailableProductDetails();
      return productsData.recordsets[0];
    } catch (err) {
      console.log(err);
    }
  };

  static getProductByName = async (searchProductName) => {
    try {
      let productDetails = await services.getProductByName(searchProductName);
      return productDetails.recordset;
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports = ProductController;
