const services = require("../Services/productServices.js");
const validation = require("../Validation/inputValidation.js");
const constants = require("./constants.js");

module.exports.getProductById = async (id) => {
  try {
    let responseMessage, statusCode;

    if (id) {
      /* Checking whether product id is valid or not, if not present then send a message as invalid Id. */
      const validId = await validation.hasValidId(id);

      if (validId) {
        responseMessage = await services.getProductById(id);
        statusCode = constants.statusCode.success;
      } else {
        responseMessage = "Invalid Product Id, Enter Valid Product Id!!!";
        statusCode = constants.statusCode.inValid;
      }
    } else {
      responseMessage = "Please, Enter the Product Id!!!";
      statusCode = constants.statusCode.noContent;
    }

    return {
      responseMessage,
      statusCode,
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports.deleteProductById = async (id) => {
  try {
    let responseMessage, statusCode;

    if (id) {
      // Checking whether product id is valid or not, if not present send a message as invalid Id
      const valideDeleteId = await validation.hasValidId(id);

      if (valideDeleteId) {
        await services.deleteProductById(id);
        responseMessage = `Product Id : ${id} is deleted!!!`;
        statusCode = constants.statusCode.success;
      } else {
        responseMessage = "Invalid Product Id, Enter Valid Product Id!!!";
        statusCode = constants.statusCode.inValid;
      }
    } else {
      responseMessage = "Please, Enter the Product Id!!!";
      statusCode = constants.statusCode.noContent;
    }

    return {
      responseMessage,
      statusCode,
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports.getAllProducts = async () => {
  try {
    const responseMessage = await services.getAllAvaiableProducts();
    let statusCode;

    if (responseMessage.length == 0) {
      responseMessage = "We dont have any product at this moment!!";
      statusCode = constants.statusCode.noData;
    }

    return {
      statusCode,
      responseMessage,
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports.getDetailsOfAllProducts = async () => {
  try {
    const responseMessage = await services.getAllAvailableProductDetails();
    let statusCode;

    if (responseMessage.length == 0) {
      responseMessage = "We dont have any product at this moment!!";
      statusCode = constants.statusCode.noData;
    }

    return {
      statusCode,
      responseMessage,
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports.getColorOptionsForProduct = async (req) => {
  try {
    let responseMessage, statusCode;

    if (req.params.productName) {
      const isValid = validation.isItValidPorductName(req.params.productName);

      // checking for valid product Name constraint
      if (isValid) {
        let isProductAvailable = await validation.hasValidProductName(
          req.params.productName
        );

        // Given product is available or not
        if (isProductAvailable) {
          let extractData = validation.extractData(req.params);
          responseMessage = await services.getProductColorsByName(
            extractData.productName
          );

          // use helper
          // if dont get any result -> means we dont have color option for this product.
          if (responseMessage != 0) {
            statusCode = constants.statusCode.success;
          } else {
            statusCode = constants.statusCode.noData;
            responseMessage =
              "We don't have color's option for this product!!!";
          }
        } else {
          responseMessage = "Product is not available";
          statusCode = constants.statusCode.noData;
        }
      } else {
        responseMessage = "Invalid Product Name, Enter Valid Product Name!!!";
        statusCode = constants.statusCode.inValid;
      }
    } else {
      responseMessage = "Please, Enter the Product Name!!!";
      statusCode = constants.statusCode.noContent;
    }

    return {
      statusCode,
      responseMessage,
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports.getProductDetailsByName = async (req) => {
  try {
    let responseMessage, statusCode;
    if (req.params.productName) {
      // product name constraint is valid or not
      const isValid = validation.isItValidPorductName(req.params.productName);

      // Checking whether product is available or not
      if (isValid) {
        const isProductAvailable = await validation.hasValidProductName(
          req.params.productName
        );
        if (isProductAvailable) {
          const extractProductName = validation.extractData(req.params);

          responseMessage = await services.getProductByName(
            extractProductName.productName
          );

          statusCode = constants.statusCode.success;
        } else {
          responseMessage = "This product is not available at this moment.";
          statusCode = constants.statusCode.noData;
        }
      } else {
        responseMessage = "Product Name is invalid!!!";
        statusCode = constants.statusCode.inValid;
      }
    } else {
      responseMessage = "Please, Enter the Product Name!!!";
      statusCode = constants.statusCode.noContent;
    }

    return {
      statusCode,
      responseMessage,
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports.getProductDetailsByNameAndColor = async (req) => {
  try {
    let responseMessage, statusCode;

    if (req.params.productName && req.params.productColor) {
      const validProductDetails = validation.isValidProductNameAndColor(
        req.params.productName,
        req.params.productColor
      );

      if (validProductDetails) {
        const extractDetails = validation.extractProductNameAndColor(
          req.params
        );

        responseMessage = await services.getProductInfoByNameAndColor(
          extractDetails
        );

        if (responseMessage.length != 0) {
          statusCode = constants.statusCode.success;
        } else {
          responseMessage = "Product with this Color is not available!!!";
          statusCode = constants.statusCode.noData;
        }
      } else {
        responseMessage =
          "Invalid Details, Enter Valid Product Name And Product Color!!!";
        statusCode = constants.statusCode.inValid;
      }
    } else {
      responseMessage = "Please, Enter the Product Details for Information!!!";
      statusCode = constants.statusCode.noContent;
    }

    return {
      statusCode,
      responseMessage,
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports.insertProduct = async (req) => {
  try {
    let responseMessage, statusCode;

    if (req.body) {
      // Checking all the details of the product is valid or not.
      if (await validation.checkAllFieldsOfInsertProductData(req.body)) {
        // Extracting pure data
        const extractPureData = validation.extractData(req.body);

        await services.insertProduct(extractPureData);

        responseMessage = `${req.body.productName} product is inserted into databse!!!`;
        statusCode = 200;
      } else {
        responseMessage = "Please, Enter the valid details of the product!!!";
        statusCode = 400;
      }
    } else {
      responseMessage = "Please, Enter the all the details of product!!!";
      statusCode = 204;
    }

    return {
      statusCode,
      responseMessage,
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports.insertProductWithColorData = async (req) => {
  try {
    let responseMessage, statusCode;

    if (req.body) {
      // Checking all the details of the product Information is valid or not.
      const isValidDetails = validation.checkAllFieldsOfInsertProductColorData(
        req.body
      );

      if (isValidDetails) {
        // Extracting pure details
        const extractPureData = validation.extractInputProductWithColorData(
          req.body
        );

        await services.insertProductWithColorData(extractPureData);

        responseMessage = `Details Inserted into Database!!!`;
        statusCode = 200;
      } else {
        responseMessage = "Please, Enter the valid details of the product!!!";
        statusCode = 400;
      }
    } else {
      responseMessage = "Please, Enter the all the details of product!!!";
      statusCode = 204;
    }

    return {
      statusCode,
      responseMessage,
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateProductQuantityById = async (req) => {
  try {
    let responseMessage, statusCode;
    if (req.params.id) {
      // checking product Id constraint
      const isValid = validation.isItValidPorductId(req.params.id);

      if (isValid) {
        // check product is present or not with this product id
        const idIsAvailable = await validation.hasValidId(req.params.id);
        if (idIsAvailable) {
          if (req.body) {
            if (validation.isItValidPorductQuantity(req.body.productQuantity)) {
              await services.updateProductQuantityById(
                req.body.productQuantity,
                req.params.id
              );

              responseMessage = `Product id : ${req.params.id} Quantity is changed to ${req.body.productQuantity}`;
              statusCode = constants.statusCode.success;
            } else {
              responseMessage = "Please, Enter Valid Product Quantity!!";
              statusCode = constants.statusCode.inValid;
            }
          } else {
            responseMessage = "Please, Enter the Product Details!!";
            statusCode = constants.statusCode.noContent;
          }
        } else {
          responseMessage = "Given Product Id is not present!!!";
          statusCode = constants.statusCode.inValid;
        }
      } else {
        responseMessage = "Invalid Product Id, Enter Valid Product Id!!";
        statusCode = constants.statusCode.inValid;
      }
    } else {
      responseMessage = "Please, Enter the Product Id!!";
      statusCode = constants.statusCode.noContent;
    }

    return {
      statusCode,
      responseMessage,
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateProuctDetailsById = async (req) => {
  try {
    let responseMessage, statusCode;
    if (req.params.id) {
      // checking product Id constraint
      const isValid = validation.isItValidPorductId(req.params.id);

      if (isValid) {
        // check product is present or not with this product id
        const idIsAvailable = await validation.hasValidId(req.params.id);

        if (idIsAvailable) {
          if (req.body) {
            // Checking all the details of the update product is valid or not.
            if (validation.checkAllFieldsOfUpdateProductData(req.body)) {
              // Extracting pure data
              const extractUpdateData = validation.extractData(req.body);

              await services.updateProductDetailsById(
                extractUpdateData,
                req.params.id
              );

              responseMessage = `Product details of ID ${req.params.id} is changed!!`;
              statusCode = constants.statusCode.success;
            } else {
              responseMessage =
                "Please, Enter the valid details of the product!!";
              statusCode = constants.statusCode.inValid;
            }
          } else {
            responseMessage =
              "Please, Enter the all the details of product to update!!";
            statusCode = constants.statusCode.noContent;
          }
        } else {
          responseMessage =
            "With this given product Id, there is no product!!!";
          statusCode = constants.statusCode.noData;
        }
      } else {
        responseMessage = "Invalid Product Id,Please Enter Valid Product Id!!";
        statusCode = constants.statusCode.inValid;
      }
    } else {
      responseMessage =
        "Please, Enter Product Id which you want to update the details!!";
      statusCode = constants.statusCode.noContent;
    }

    return {
      statusCode,
      responseMessage,
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateProductQuantityOnProductSold = async (req) => {
  try {
    let responseMessage, statusCode;

    // check if the data is empty or not
    if (
      req.params.productName &&
      req.params.productColor &&
      req.params.productQuantity
    ) {
      // input constraint are valid or not
      if (
        validation.isItValidPorductName(req.params.productName) &&
        validation.isItValidColor(req.params.productColor) &&
        validation.isItValidPorductQuantity(req.params.productQuantity)
      ) {
        // extracting pure data
        const extractData = validation.extractProductNameAndColor(req.params);

        const productDetails = await services.getProductInfoByNameAndColor(
          extractData
        );

        // check quantity is available or not
        for (let i = 0; i < productDetails.length; i++) {
          if (
            productDetails[i].productName.toLowerCase() ===
              extractData.productName.toLowerCase() &&
            productDetails[i].productColor.toLowerCase() ===
              extractData.productColor.toLowerCase()
          ) {
            if (
              productDetails[i].productQuantity >= extractData.productQuantity
            ) {
              await services.updateProductQuantityOnProductSold(extractData);
              responseMessage = `${extractData.productQuantity} Quantity of ${extractData.productColor} color ${extractData.productName} is sold.`;
              statusCode = constants.statusCode.success;
              break;
            } else {
              responseMessage =
                "Product with this color is not available at this moment.";
              statusCode = constants.statusCode.noData;
            }
          } else {
            responseMessage = "We dont have this product.";
            statusCode = constants.statusCode.noData;
          }
        }
      } else {
        responseMessage = "Invalid Details";
        statusCode = constants.statusCode.inValid;
      }
    } else {
      responseMessage = "Please, Enter the Product Details for Information!!!";
      statusCode = constants.statusCode.noContent;
    }

    return {
      statusCode,
      responseMessage,
    };
  } catch (err) {
    console.log(err);
  }
};
