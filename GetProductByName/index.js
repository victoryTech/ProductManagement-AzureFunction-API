const services = require("../Services/productServices.js");
const validation = require("../Validation/inputValidation.js");

module.exports = async function (context, req) {
  context.log("Get product details by productName!!!");

  let responseMessage, statusCode;
  if (req.params.productName) {
    // product name constraint is valid or not
    let isValid = validation.isItValidPorductName(req.params.productName);
    // Checking whether product is available or not
    if (isValid) {
      let isProductAvailable = await validation.hasValidProductName(
        req.params.productName
      );
      if (isProductAvailable) {
        let extractProductName = validation.extractData(req.params);
        responseMessage = await services.getProductByName(
          extractProductName.productName
        );
        statusCode = 200;
      } else {
        responseMessage = "This product is not available at this moment.";
        statusCode = 200;
      }
    } else {
      responseMessage = "Product Name is invalid!!!";
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
