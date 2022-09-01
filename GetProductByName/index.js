const functionHandler = require("../Utils/functionHandller.js");

module.exports = async function (context, req) {
  try {
    context.log("Get product details by productName!!!");

    const resultObj = await functionHandler.getProductDetailsByName(req);

    context.res = {
      status: resultObj.statusCode,
      body: resultObj.responseMessage,
    };
  } catch (err) {
    console.log(err);
  }
};
