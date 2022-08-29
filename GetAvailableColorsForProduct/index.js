const productControllers = require("../Controllers/productControllers.js");
const validation = require("../Validation/inputValidation.js");

module.exports = async function (context, req) {
  context.log("Get All Color option for particular product!!!");

  let responseMessage, statusCode;
  if (req.params.productName) {
    let validName = await validation.hasValidProductName(
      req.params.productName
    );
    if (validName) {
      let extractData = validation.extractData(req.params);
      responseMessage = await productControllers.getProductColorsByName(
        extractData.productName
      );
      if (responseMessage != 0) {
        statusCode = 200;
      } else {
        statusCode = 200;
        responseMessage = "We don't have color's option for this product!!!";
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
