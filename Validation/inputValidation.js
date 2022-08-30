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

// Extracting pure productName from input
module.exports.extractData = (insertedData) => {
  insertedData.productName = this.trimSpace(insertedData.productName);
  return insertedData;
};

// Is it valid productName acc. to schema
module.exports.isItValidPorductName = (data) => {
  let isValid = /^[a-zA-Z]+$/.test(data);
  if (isValid) return true;
  return false;
};

// Is it valid productId acc. to schema
module.exports.isItValidPorductId = (id) => {
  let isValid = /^\d+$/.test(id);
  if (isValid && id > 0) return true;
  return false;
};

// Is it valid productPrice acc. to schema
module.exports.isItValidPorductPrice = (productPrice) => {
  let isValid = /^\d+$/.test(productPrice);
  if (isValid) return true;
  return false;
};

// Is it valid productQuantity acc. to schema
module.exports.isItValidPorductQuantity = (productQuantity) => {
  productQuantity = parseInt(productQuantity);
  let isValid = /^\d+$/.test(productQuantity);
  if (isValid) return true;
  return false;
};

// valid color Name
module.exports.isItValidColor = (color) => {
  let isValid = /^[a-zA-Z]+$/.test(color);
  if (isValid) return true;
  return false;
};

// valid color id
module.exports.isItValidColorId = (colorId) => {
  let isValid = /^\d+$/.test(colorId);
  if (isValid) return true;
  return false;
};

// Trim space of data from both side.
module.exports.trimSpace = (data) => {
  return data.trim();
};

// checking product with corresponding color is having valid details and present or not
module.exports.isValidProductNameAndColor = (prodName, prodColor) => {
  if (this.isItValidPorductName(prodName) && this.isItValidColor(prodColor)) {
    return true;
  }
  return false;
};

// extract product Name and productColor
module.exports.extractProductNameAndColor = (insertedProductDetails) => {
  insertedProductDetails.productName = this.trimSpace(
    insertedProductDetails.productName
  );
  insertedProductDetails.productColor = this.trimSpace(
    insertedProductDetails.productColor
  );
  return insertedProductDetails;
};

// Checking all the details of the product Information is valid or not.
module.exports.checkAllFieldsOfInsertProductColorData = (insertedInputData) => {
  let insertedProductName = this.trimSpace(insertedInputData.productName);
  let insertedProductId = insertedInputData.productId;
  let insertedColorId = insertedInputData.colorId;
  let insertedColorName = insertedInputData.colorName;
  let insertedProductPrice = insertedInputData.productPrice;
  let insertedProductQuantity = insertedInputData.productQuantity;

  if (
    this.isItValidPorductName(insertedProductName) &&
    this.isItValidPorductId(insertedProductId) &&
    this.isItValidColor(insertedColorName) &&
    this.isItValidColorId(insertedColorId) &&
    this.isItValidPorductPrice(insertedProductPrice) &&
    this.isItValidPorductQuantity(insertedProductQuantity)
  ) {
    return true;
  }
  return false;
};

// Extracting pure details
module.exports.extractInputProductWithColorData = (insertedData) => {
  insertedData.productName = this.trimSpace(insertedData.productName);
  insertedData.colorName = this.trimSpace(insertedData.colorName);
  return insertedData;
};
