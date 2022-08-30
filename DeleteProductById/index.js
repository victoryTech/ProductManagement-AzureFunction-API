const productControllers = require("../Controllers/productControllers.js");
const validation = require("../Validation/inputValidation.js");

module.exports = async function (context, req) {
  context.log("Delete Product details of given  productId!!!");

  let responseMessage, statusCode;
  if (req.params.id) {
    // Checking whether product id is valid or not, if not present send a message as invalid Id
    let validateDeleteId = await validation.hasValidId(req.params.id);

    if (validateDeleteId) {
      productControllers.deleteProductById(req.params.id);
      responseMessage = `Product Id : ${req.params.id} is deleted!!!`;
      statusCode = 200;
    } else {
      responseMessage = "Invalid Product Id, Enter Valid Product Id!!!";
      statusCode = 400;
    }
  } else {
    responseMessage = "Please, Enter the Product Id!!!";
    statusCode = 204;
  }

  context.res = {
    status: statusCode,
    body: responseMessage,
  };
};
