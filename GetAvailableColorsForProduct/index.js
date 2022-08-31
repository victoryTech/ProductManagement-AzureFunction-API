const productControllers = require("../Controllers/productControllers.js");
const validation = require("../Validation/inputValidation.js");

module.exports = async function (context, req) {
  context.log("Get All Color option for particular product!!!");

  let responseMessage, statusCode;
  if (req.params.productName) {
    let isValid = validation.isItValidPorductName(req.params.productName);
    // checking for valid product Name constraint
    if (isValid) {
      let isProductAvailable = await validation.hasValidProductName(
        req.params.productName
      );
      // Given product is available or not
      if (isProductAvailable) {
        let extractData = validation.extractData(req.params);
        responseMessage = await productControllers.getProductColorsByName(
          extractData.productName
        );
        // use helper
        // if dont get any result -> means we dont have color option for this product.
        if (responseMessage != 0) {
          statusCode = 200;
        } else {
          statusCode = 200;
          responseMessage = "We don't have color's option for this product!!!";
        }
      } else {
        responseMessage = "Product is not available";
        statusCode = 400;
      }
    } else {
      responseMessage = "Invalid Product Name, Enter Valid Product Name!!!";
      statusCode = 400;
    }
  } else {
    responseMessage = "Please, Enter the Product Name!!!";
    statusCode = 404;
  }

  context.res = {
    status: statusCode,
    body: responseMessage,
  };
};
