const productControllers = require("../Controllers/productControllers.js");

module.exports = async function (context, req) {
  context.log("Get All the details of available products.");
  const responseMessage =
    await productControllers.getAllAvailableProductDetails();
  context.res = {
    status: 200,
    body: responseMessage,
  };
};
