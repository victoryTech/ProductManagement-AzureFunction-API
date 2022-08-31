const services = require("../Services/productServices.js");
const validation = require("../Validation/inputValidation.js");

module.exports = async function (context, req) {
  context.log("Insert the product details in the Database!!!");

  let responseMessage, statusCode;

  if (req.body) {
    // Checking all the details of the product is valid or not.
    if (await validation.checkAllFieldsOfInsertProductData(req.body)) {
      // Extracting pure data
      let extractPureData = validation.extractData(req.body);

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

  context.res = {
    status: statusCode,
    body: responseMessage,
  };
};
