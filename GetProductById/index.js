const productControllers = require("../Controllers/productControllers.js");
const validation = require("../Validation/inputValidation.js");

module.exports = async function (context, req) {
  context.log("Get product details with the given productId!!!");

  let responseMessage;
  let statusCode;
  if (req.params.id) {
    // Checking whether product id is valid or not, if not present send a message as invalid Id
    let validId = await validation.hasValidId(req.params.id);

    if (validId) {
      responseMessage = await productControllers.getProductById(req.params.id);
    } else {
      responseMessage = "Invalid Product Id, Enter Valid Product Id.";
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
