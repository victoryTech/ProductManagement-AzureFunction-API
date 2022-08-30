const productControllers = require("../Controllers/productControllers.js");
const validation = require("../Validation/inputValidation.js");

module.exports = async function (context, req) {
  context.log("Update Product Quantity on Product Sold.");

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
      let extractData = validation.extractProductNameAndColor(req.params);
      let productDetails =
        await productControllers.getProductInfoByNameAndColor(extractData);
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
            await productControllers.updateProductQuantityOnProductSold(
              extractData
            );
            responseMessage = `${extractData.productQuantity} Quantity of ${extractData.productColor} color ${extractData.productName} is sold.`;
            break;
          } else {
            responseMessage =
              "Product with this color is not available at this moment.";
          }
        } else {
          responseMessage = "We dont have this product.";
        }
      }
      statusCode = 200;
    } else {
      statusCode = 400;
      responseMessage = "Invalid Details";
    }
  } else {
    responseMessage = "Please, Enter the Product Details for Information!!!";
    statusCode = 404;
  }

  context.res = {
    status: statusCode,
    body: responseMessage,
  };
};
