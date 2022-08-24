const productControllers = require("../Controllers/productControllers.js");

module.exports = async function (context, req) {
  context.log("Delete Product of given Id.");
  let responseMessage;
  if (req.params.id) {
    productControllers.deleteProductById(context.req.params.id);
    responseMessage = `Product Id : ${context.req.params.id} is deleted.`;
  }
  context.res = {
    status: 200,
    body: responseMessage,
  };
};
