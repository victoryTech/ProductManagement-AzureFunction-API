const services = require("../Services/productServices.js");

module.exports = async function (context, req) {
  context.log("Get All the available products with their price!!!");

  const responseMessage = await services.getAllAvaiableProducts();

  if (responseMessage.length == 0) {
    responseMessage = "We dont have any product at this moment!!";
  }

  context.res = {
    status: 200,
    body: responseMessage,
  };
};
