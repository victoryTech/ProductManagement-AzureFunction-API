const functionHandler = require("../Utils/functionHandller.js");
const logger = require("../Utils/logger.js");

module.exports = async function (context, req) {
  try {
    context.log("Get product details by productName!!!");

    const resultObj = await functionHandler.getProductDetailsByName(req);

    logger.log(
      "info",
      { body: resultObj.responseMessage },
      { status: resultObj.statusCode }
    );

    context.res = {
      status: resultObj.statusCode,
      body: resultObj.responseMessage,
    };
  } catch (err) {
    logger.log("error", { error: err });
  }
};
