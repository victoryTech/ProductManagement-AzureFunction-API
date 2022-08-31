const services = require("../Services/productServices.js");

// validating productId is present or not
module.exports.hasValidId = async (id) => {
  const allAvailableProducts = await services.getAllAvailableProductDetails();

  const isIdPresent = allAvailableProducts.reduce(function (acc, curr) {
    if (curr.productId == id) {
      acc = true;
    }
    return acc;
  }, false);

  return isIdPresent;
};

// validating productName is present or not
module.exports.hasValidProductName = async (productName) => {
  const allAvailableProducts = await services.getAllAvailableProductDetails();

  productName = this.trimSpace(productName);

  const isProductNamePresent = allAvailableProducts.reduce(function (
    acc,
    curr
  ) {
    if (curr.productName.toLowerCase() == productName.toLowerCase()) {
      acc = true;
    }
    return acc;
  },
  false);

  return isProductNamePresent;
};

// validate all fields of Inserted data
module.exports.checkAllFieldsOfInsertProductData = async (insertedData) => {
  const insertedProductName = this.trimSpace(insertedData.productName);
  const insertedProductId = insertedData.productId;
  const insertedProductPrice = insertedData.productPrice;
  const insertedProductQuantity = insertedData.productQuantity;
  const insertedProductNameIsPresent = await this.hasValidProductName(
    insertedProductName
  );

  const insertedProductIdIsPresent = await this.hasValidId(insertedProductId);

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
module.exports.checkAllFieldsOfUpdateProductData = (updateData) => {
  const updatedProductName = this.trimSpace(updateData.productName);
  const updatedProductPrice = updateData.productPrice;
  const updatedProductQuantity = updateData.productQuantity;

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
  const isValid = /^[a-zA-Z]+$/.test(data);
  if (isValid) return true;
  return false;
};

// Is it valid productId acc. to schema
module.exports.isItValidPorductId = (id) => {
  const isValid = /^\d+$/.test(id);
  if (isValid && id > 0) return true;
  return false;
};

// Is it valid productPrice acc. to schema
module.exports.isItValidPorductPrice = (productPrice) => {
  const isValid = /^\d+$/.test(productPrice);
  if (isValid) return true;
  return false;
};

// Is it valid productQuantity acc. to schema
module.exports.isItValidPorductQuantity = (productQuantity) => {
  productQuantity = parseInt(productQuantity);
  const isValid = /^\d+$/.test(productQuantity);
  if (isValid) return true;
  return false;
};

// valid color Name
module.exports.isItValidColor = (colorName) => {
  const isValid = /^[a-zA-Z]+$/.test(colorName);
  if (isValid) return true;
  return false;
};

// valid color id
module.exports.isItValidColorId = (colorId) => {
  const isValid = /^\d+$/.test(colorId);
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
  const insertedProductName = this.trimSpace(insertedInputData.productName);
  const insertedProductId = insertedInputData.productId;
  const insertedColorId = insertedInputData.colorId;
  const insertedColorName = insertedInputData.colorName;
  const insertedProductPrice = insertedInputData.productPrice;
  const insertedProductQuantity = insertedInputData.productQuantity;

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
