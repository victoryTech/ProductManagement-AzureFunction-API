const services = require("../Services/productServices.js");

class ProductController {
  // Controller for retrive all the available product with their price.
  static getAllAvailableProduct = async () => {
    try {
      let productsData = await services.getAllAvaiableProducts();
      return productsData.recordsets[0];
    } catch (err) {
      console.log(err);
    }
  };

  // Controller for retriving all the details of the available product.
  static getAllAvailableProductDetails = async () => {
    try {
      let productsData = await services.getAllAvailableProductDetails();
      return productsData.recordsets[0];
    } catch (err) {
      console.log(err);
    }
  };

  // Controller for retrive details of the product with id.
  static getProductById = async (id) => {
    try {
      let productData = await services.getProductById(id);
      return productData.recordset;
    } catch (err) {
      console.log(err);
    }
  };

  // Controller for retriveing the detail of a specific product by their productName
  static getProductByName = async (searchProductName) => {
    try {
      let productDetails = await services.getProductByName(searchProductName);
      return productDetails.recordset;
    } catch (err) {
      console.log(err);
    }
  };

  // Controller for inserting the details of product in the db.
  static insertProduct = async (insertData) => {
    try {
      await services.insertProduct(insertData);
    } catch (err) {
      console.log(err);
    }
  };

  // Controller for updating the details of product with given particular productId.
  static updateProductDetailsById = async (data, productId) => {
    try {
      await services.updateProductDetailsById(data, productId);
    } catch (err) {
      console.log(err);
    }
  };

  // Controller for partially update the product details by given productId, like here we are updating productQuantity.
  static updateProductQuantityById = async (productQuantity, productId) => {
    try {
      await services.updateProductQuantityById(productQuantity, productId);
    } catch (err) {
      console.log(err);
    }
  };

  // Controller for deleting product details by given productId.
  static deleteProductById = async (id) => {
    try {
      await services.deleteProductById(id);
    } catch (err) {
      console.log(err);
    }
  };

  // Fetching product information by Name and color
  static getProductInfoByNameAndColor = async (productInfo) => {
    try {
      let productInformation = await services.getProductInfoByNameAndColor(
        productInfo
      );
      return productInformation.recordset;
    } catch (err) {
      console.log(err);
    }
  };

  // Fetching product information with colors option
  static getProductColorsByName = async (productName) => {
    try {
      let productInformation = await services.getProductColorsByName(
        productName
      );
      return productInformation.recordsets[0];
    } catch (err) {
      console.log(err);
    }
  };

  // Controller for inserting the details of product with it's color in the db.
  static insertProductWithColorData = async (insertedData) => {
    try {
      await services.insertProductWithColorData(insertedData);
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports = ProductController;
