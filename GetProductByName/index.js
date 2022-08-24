const productControllers = require("../Controllers/productControllers.js");

module.exports = async function (context, req) {
  context.log("Get product details by name.");
  let responseMessage;
  if (req.params.name) {
    responseMessage = await productControllers.getProductByName(
      context.req.params.name
    );
  } else {
    responseMessage =
      "Enter the name of the product of which you want details.";
  }
  context.res = {
    status: 200,
    body: responseMessage,
  };
};
