const productControllers = require("../Controllers/productControllers.js");
const validation = require("../Validation/inputValidation.js");

module.exports = async function (context, req) {
  context.log("Updating Quantity of product with by given Id!!!");

  let responseMessage;
  let statusCode;
  if (req.params.id) {
    // checking product Id constraint
    let isValid = validation.isItValidPorductId(req.params.id);
    if (isValid) {
      // check product is present or not with this product id
      let idIsAvailable = await validation.hasValidId(req.params.id);
      if (idIsAvailable) {
        if (req.body) {
          if (validation.isItValidPorductQuantity(req.body.productQuantity)) {
            await productControllers.updateProductQuantityById(
              req.body.productQuantity,
              req.params.id
            );
            responseMessage = `Product id : ${context.req.params.id} Quantity is changed to ${context.req.body.productQuantity}`;
            statusCode = 200;
          } else {
            responseMessage = "Please, Enter Valid Product Quantity!!";
            statusCode = 204;
          }
        } else {
          responseMessage = "Please, Enter the Product Details!!";
          statusCode = 204;
        }
      } else {
        responseMessage = "Given Product Id is not present!!!";
        statusCode = 400;
      }
    } else {
      responseMessage = "Invalid Product Id, Enter Valid Product Id!!";
      statusCode = 400;
    }
  } else {
    responseMessage = "Please, Enter the Product Id!!";
    statusCode = 204;
  }

  context.res = {
    status: statusCode,
    body: responseMessage,
  };
};
