const { sql } = require("../DataAcess/dbConnection.js");
const productDataAcess = require("../DataAcess/productsDataAcess.js");

module.exports.getAllAvaiableProducts = async () => {
  try {
    const result = await productDataAcess.getAllAvailableProductsFromDB();
    return result.recordsets[0];
  } catch (err) {
    console.log(err);
  }
};

module.exports.getAllAvailableProductDetails = async () => {
  try {
    const result = await productDataAcess.getAllAvailableProductDetailsFromDB();
    return result.recordsets[0];
  } catch (err) {
    console.log(err);
  }
};

module.exports.getProductById = async (id) => {
  try {
    const sqlParameters = [];
    sqlParameters.push({
      name: "productId",
      type: sql.Int,
      value: id,
    });
    const result = await productDataAcess.getProductByIdFromDB(sqlParameters);
    return result.recordset;
  } catch (err) {
    console.log(err);
  }
};

module.exports.getProductByName = async (searchProductName) => {
  try {
    const sqlParameters = [];
    sqlParameters.push({
      name: "productName",
      type: sql.NVarChar,
      value: searchProductName,
    });
    const result = await productDataAcess.getProductByNameFromDB(sqlParameters);
    return result.recordset;
  } catch (err) {
    console.log(err);
  }
};

module.exports.insertProduct = async (parameter) => {
  try {
    const sqlParameters = [];
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

    await productDataAcess.insertProductInDB(sqlParameters);
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateProductDetailsById = async (parameter, productId) => {
  try {
    const sqlParameters = [];
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
    await productDataAcess.updateProductDetailsByIdInDB(sqlParameters);
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateProductQuantityById = async (
  productQuantity,
  productId
) => {
  try {
    const sqlParameters = [];
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
    await productDataAcess.updateProductQuantityByIdInDB(sqlParameters);
  } catch (err) {
    console.log(err);
  }
};

module.exports.deleteProductById = async (id) => {
  try {
    const sqlParameters = [];
    sqlParameters.push({
      name: "productId",
      type: sql.Int,
      value: id,
    });
    await productDataAcess.deleteProductByIdInDB(sqlParameters);
  } catch (err) {
    console.log(err);
  }
};

module.exports.getProductInfoByNameAndColor = async (parameter) => {
  try {
    const sqlParameters = [];
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

    const result = await productDataAcess.getProductInfoByNameAndColorFromDB(
      sqlParameters
    );
    return result.recordset;
  } catch (err) {
    console.log(err);
  }
};

module.exports.getProductColorsByName = async (productName) => {
  try {
    const sqlParameters = [];
    sqlParameters.push({
      name: "productName",
      type: sql.NVarChar,
      value: productName,
    });

    const result = await productDataAcess.getProductColorsByNameFromDB(
      sqlParameters
    );
    return result.recordsets[0];
  } catch (err) {
    console.log(err);
  }
};

module.exports.insertProductWithColorData = async (parameter) => {
  try {
    const sqlParameters = [];
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
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateProductQuantityOnProductSold = async (parameter) => {
  try {
    const sqlParameters = [];
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
    await productDataAcess.updateProductQuantityOnProductSoldInDB(
      sqlParameters
    );
  } catch (err) {
    console.log(err);
  }
};
