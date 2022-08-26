const productControllers = require("../Controllers/productControllers.js");

// validating productId is present or not
module.exports.hasValidId = async (id) => {
  let allAvailableProducts =
    await productControllers.getAllAvailableProductDetails();

  let isIdPresent = allAvailableProducts.reduce(function (acc, curr) {
    if (curr.productId == id) {
      acc = true;
    }
    return acc;
  }, false);

  return isIdPresent;
};

// validating productName is present or not
module.exports.hasValidProductName = async (productName) => {
  let allAvailableProducts =
    await productControllers.getAllAvailableProductDetails();
  productName = this.trimSpace(productName);
  let isProductNamePresent = allAvailableProducts.reduce(function (acc, curr) {
    if (curr.productName.toLowerCase() == productName.toLowerCase()) {
      acc = true;
    }
    return acc;
  }, false);

  return isProductNamePresent;
};

// validate all fields of Inserted data
module.exports.checkAllFieldsOfInsertProductData = async (insertedData) => {
  let insertedProductName = this.trimSpace(insertedData.productName);
  let insertedProductId = insertedData.productId;
  let insertedProductPrice = insertedData.productPrice;
  let insertedProductQuantity = insertedData.productQuantity;
  let insertedProductNameIsPresent = await this.hasValidProductName(
    insertedProductName
  );
  let insertedProductIdIsPresent = await this.hasValidId(insertedProductId);
  if (
    this.isItValidPorductName(insertedProductName) &&
    !insertedProductNameIsPresent &&
    !insertedProductIdIsPresent &&
    this.isItValidPorductId(insertedProductId) &&
    this.isItValidPorductPrice(insertedProductPrice) &&
    this.isItValidPorductQuantity(insertedProductQuantity)
  ) {
    return true;
  }
  return false;
};

// validate all fields of updated data
module.exports.checkAllFieldsOfUpdateProductData = async (updateData) => {
  let updatedProductName = this.trimSpace(updateData.productName);
  let updatedProductPrice = updateData.productPrice;
  let updatedProductQuantity = updateData.productQuantity;

  if (
    this.isItValidPorductName(updatedProductName) &&
    this.isItValidPorductPrice(updatedProductPrice) &&
    this.isItValidPorductQuantity(updatedProductQuantity)
  ) {
    return true;
  }
  return false;
};

// extracting pure productName from input
module.exports.extractData = (insertedData) => {
  insertedData.productName = this.trimSpace(insertedData.productName);
  return insertedData;
};

// Is it valid productName acc. to schema
module.exports.isItValidPorductName = (data) => {
  if (typeof data === "string" && data.length != 0) return true;
  return false;
};

// Is it valid productId acc. to schema
module.exports.isItValidPorductId = (id) => {
  if (typeof id === "number" && id > 0) return true;
  return false;
};

// Is it valid productPrice acc. to schema
module.exports.isItValidPorductPrice = (productPrice) => {
  if (typeof productPrice === "number") return true;
  return false;
};

// Is it valid productQuantity acc. to schema
module.exports.isItValidPorductQuantity = (productQuantity) => {
  if (typeof productQuantity === "number") return true;
  return false;
};

// trim space of data from both side.
module.exports.trimSpace = (data) => {
  return data.trim();
};
