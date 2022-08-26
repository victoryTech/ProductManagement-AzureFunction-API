const productControllers = require("../Controllers/productControllers.js");

module.exports = async function (context, req) {
  context.log("Get All the available products with their price!!!");

  const responseMessage = await productControllers.getAllAvailableProduct();

  context.res = {
    status: 200,
    body: responseMessage,
  };
};
