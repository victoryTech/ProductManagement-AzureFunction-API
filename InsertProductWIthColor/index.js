const productControllers = require("../Controllers/productControllers.js");
const validation = require("../Validation/inputValidation.js");

module.exports = async function (context, req) {
  context.log("Insert the product details with color in the Database!!!");

  let responseMessage, statusCode;

  if (req.body) {
    // Checking all the details of the product Information is valid or not.
    let isValidDetails = validation.checkAllFieldsOfInsertProductColorData(
      req.body
    );
    if (isValidDetails) {
      // Extracting pure details
      let extractPureData = validation.extractInputProductWithColorData(
        req.body
      );
      await productControllers.insertProductWithColorData(extractPureData);
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

  context.res = {
    status: statusCode,
    body: responseMessage,
  };
};
