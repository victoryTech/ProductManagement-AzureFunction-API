const productControllers = require("../Controllers/productControllers.js");

module.exports = async function (context, req) {
  context.log("Updating Quantity of product with respect too Id.");
  let responseMessage;
  if (req.params.id && req.body) {
    await productControllers.updateProductQuantityById(
      context.req.body.productQuantity,
      context.req.params.id
    );
    responseMessage = `Product id : ${context.req.params.id} Quantity is changed to ${context.req.body.productQuantity}`;
  }
  context.res = {
    status: 200,
    body: responseMessage,
  };
};
