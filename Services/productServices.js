const { sql } = require("../DataAcess/dbConnection.js");
const productDataAcess = require("../DataAcess/productsDataAcess.js");

module.exports.getAllAvaiableProducts = async () => {
  return productDataAcess.getAllAvailableProductsFromDB();
};

module.exports.getAllAvailableProductDetails = async () => {
  return productDataAcess.getAllAvailableProductDetailsFromDB();
};

module.exports.getProductById = async (id) => {
  let sqlParameters = [];
  sqlParameters.push({
    name: "productId",
    type: sql.Int,
    value: id,
  });
  return productDataAcess.getProductByIdFromDB(sqlParameters);
};

module.exports.getProductByName = async (searchProductName) => {
  let sqlParameters = [];
  sqlParameters.push({
    name: "productName",
    type: sql.NVarChar,
    value: searchProductName,
  });
  return productDataAcess.getProductByNameFromDB(sqlParameters);
};

module.exports.insertProduct = async (parameter) => {
  let sqlParameters = [];
  sqlParameters.push({
    name: "productId",
    type: sql.Int,
    value: parameter.productId,
  });
  sqlParameters.push({
    name: "productName",
    type: sql.NVarChar,
    value: parameter.productName,
  });
  sqlParameters.push({
    name: "productPrice",
    type: sql.Int,
    value: parameter.productPrice,
  });
  sqlParameters.push({
    name: "productQuantity",
    type: sql.Int,
    value: parameter.productQuantity,
  });

  productDataAcess.insertProductInDB(sqlParameters);
};

module.exports.updateProductDetailsById = async (parameter, productId) => {
  let sqlParameters = [];
  sqlParameters.push({
    name: "productId",
    type: sql.Int,
    value: productId,
  });
  sqlParameters.push({
    name: "productName",
    type: sql.NVarChar,
    value: parameter.productName,
  });
  sqlParameters.push({
    name: "productPrice",
    type: sql.Int,
    value: parameter.productPrice,
  });
  sqlParameters.push({
    name: "productQuantity",
    type: sql.Int,
    value: parameter.productQuantity,
  });
  productDataAcess.updateProductDetailsByIdInDB(sqlParameters);
};

module.exports.updateProductQuantityById = async (
  productQuantity,
  productId
) => {
  let sqlParameters = [];
  sqlParameters.push({
    name: "productId",
    type: sql.Int,
    value: productId,
  });
  sqlParameters.push({
    name: "productQuantity",
    type: sql.Int,
    value: productQuantity,
  });
  productDataAcess.updateProductQuantityByIdInDB(sqlParameters);
};

module.exports.deleteProductById = async (id) => {
  let sqlParameters = [];
  sqlParameters.push({
    name: "productId",
    type: sql.Int,
    value: id,
  });
  productDataAcess.deleteProductByIdInDB(sqlParameters);
};

module.exports.getProductInfoByNameAndColor = async (parameter) => {
  let sqlParameters = [];
  sqlParameters.push({
    name: "productName",
    type: sql.NVarChar,
    value: parameter.productName,
  });
  sqlParameters.push({
    name: "productColor",
    type: sql.NVarChar,
    value: parameter.productColor,
  });

  return productDataAcess.getProductInfoByNameAndColorFromDB(sqlParameters);
};

module.exports.getProductColorsByName = async (productName) => {
  let sqlParameters = [];
  sqlParameters.push({
    name: "productName",
    type: sql.NVarChar,
    value: productName,
  });

  return productDataAcess.getProductColorsByNameFromDB(sqlParameters);
};

module.exports.insertProductWithColorData = async (parameter) => {
  let sqlParameters = [];
  sqlParameters.push({
    name: "productId",
    type: sql.Int,
    value: parameter.productId,
  });
  sqlParameters.push({
    name: "productName",
    type: sql.NVarChar,
    value: parameter.productName,
  });
  sqlParameters.push({
    name: "colorId",
    type: sql.Int,
    value: parameter.colorId,
  });
  sqlParameters.push({
    name: "colorName",
    type: sql.NVarChar,
    value: parameter.colorName,
  });
  sqlParameters.push({
    name: "productPrice",
    type: sql.Int,
    value: parameter.productPrice,
  });
  sqlParameters.push({
    name: "productQuantity",
    type: sql.Int,
    value: parameter.productQuantity,
  });

  await productDataAcess.insertProductWithColorDataInDB(sqlParameters);
};

module.exports.updateProductQuantityOnProductSold = async (parameter) => {
  let sqlParameters = [];
  sqlParameters.push({
    name: "productName",
    type: sql.NVarChar,
    value: parameter.productName,
  });
  sqlParameters.push({
    name: "colorName",
    type: sql.NVarChar,
    value: parameter.productColor,
  });
  sqlParameters.push({
    name: "productQuantity",
    type: sql.INT,
    value: parameter.productQuantity,
  });
  return productDataAcess.updateProductQuantityOnProductSoldInDB(sqlParameters);
};
