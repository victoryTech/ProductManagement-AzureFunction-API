const productControllers = require("../Controllers/productControllers.js");

module.exports = async function (context, req) {
  context.log("Insert the Product in the Database.");
  let responseMessage;
  if (req.body) {
    await productControllers.insertProduct(context.req.body);
    responseMessage = `${context.req.body.productName} product is inserted into databse.`;
  }
  context.res = {
    status: 200,
    body: responseMessage,
  };
};
