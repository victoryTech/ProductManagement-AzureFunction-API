const productControllers = require("../Controllers/productControllers.js");
const validation = require("../Validation/inputValidation.js");

module.exports = async function (context, req) {
  context.log("Update the Product by productId in the Database!!!");

  let responseMessage;
  let statusCode;
  if (req.params.id) {
    // checking product id is valid or not, if not present send a message as in valid Id
    let validId = await validation.hasValidId(req.params.id);

    if (validId) {
      if (req.body) {
        // Checking all the details of the update product is valid or not.
        if (await validation.checkAllFieldsOfUpdateProductData(req.body)) {
          // Extracting pure data
          let extractUpdateData = await validation.extractData(req.body);

          await productControllers.updateProductDetailsById(
            extractUpdateData,
            req.params.id
          );
          responseMessage = `Product details of ID ${req.params.id} is changed!!`;
          statusCode = 200;
        } else {
          responseMessage = "Please, Enter the valid details of the product!!";
          statusCode = 400;
        }
      } else {
        responseMessage =
          "Please, Enter the all the details of product to update!!";
        statusCode = 204;
      }
    } else {
      responseMessage = "Invalid Product Id,Please Enter Valid Product Id!!";
      statusCode = 400;
    }
  } else {
    responseMessage =
      "Please, Enter Product Id which you want to update the details!!";
    statusCode = 204;
  }

  context.res = {
    status: statusCode,
    body: responseMessage,
  };
};
