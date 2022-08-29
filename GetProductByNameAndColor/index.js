const productControllers = require("../Controllers/productControllers.js");
const validation = require("../Validation/inputValidation.js");

module.exports = async function (context, req) {
  context.log("Get details of products by name and color.");

  let responseMessage, statusCode;
  if (req.params.productName && req.params.productColor) {
    // check the productName with correspondig color is present or not
    let validProductDetails = validation.isValidProductNameAndColor(
      req.params.productName,
      req.params.productColor
    );
    if (validProductDetails) {
      let extractDetails = validation.extractProductNameAndColor(req.params);
      responseMessage = await productControllers.getProductInfoByNameAndColor(
        extractDetails
      );
      if (responseMessage.length != 0) {
        statusCode = 200;
      } else {
        responseMessage = "Product with this Color is not available!!!";
        statusCode = 200;
      }
    } else {
      responseMessage =
        "Invalid Details, Enter Valid Product Name And Product Color!!!";
      statusCode = 400;
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
