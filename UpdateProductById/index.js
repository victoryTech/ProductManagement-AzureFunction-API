const productControllers = require("../Controllers/productControllers.js");

module.exports = async function (context, req) {
  context.log("Update the Product by Id in the Database.");

  let responseMessage;
  if (req.body && req.params.id) {
    await productControllers.updateProductDetailsById(
      context.req.body,
      context.req.params.id
    );
    responseMessage = `Product details of ID ${context.req.params.id} is changed.`;
  }
  context.res = {
    status: 200,
    body: responseMessage,
  };
};
