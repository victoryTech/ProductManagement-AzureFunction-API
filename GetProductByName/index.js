const productControllers = require("../Controllers/productControllers.js");
const validation = require("../Validation/inputValidation.js");

module.exports = async function (context, req) {
  context.log("Get product details by productName!!!");

  let responseMessage;
  let statusCode;
  if (req.params.productName) {
    // Checking whether product name is valid or not, if not present send a message as invalid name
    let validName = await validation.hasValidProductName(
      req.params.productName
    );
    if (validName) {
      let extractProductName = validation.extractData(req.params);
      responseMessage = await productControllers.getProductByName(
        extractProductName.productName
      );
      statusCode = 200;
    } else {
      responseMessage = "Invalid Product Id, Enter Valid Product Name!!!";
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
