const productControllers = require("../Controllers/productControllers.js");

module.exports = async function (context, req) {
  context.log("Get All the details of available products.!!!");

  const responseMessage =
    await productControllers.getAllAvailableProductDetails();

  if (responseMessage.length == 0) {
    responseMessage = "We dont have any product at this moment!!";
  }

  context.res = {
    status: 200,
    body: responseMessage,
  };
};
