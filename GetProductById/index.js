const productControllers = require("../Controllers/productControllers.js");

module.exports = async function (context, req) {
  context.log("Get Product with the given id.");
  let responseMessage;
  if (req.params.id) {
    responseMessage = await productControllers.getProductById(
      context.req.params.id
    );
    if (JSON.stringify(responseMessage) === "[]") {
      responseMessage =
        "Invalid id or Given Product Quantity is not available.";
    }
  }
  context.res = {
    status: 200,
    body: responseMessage,
  };
};
