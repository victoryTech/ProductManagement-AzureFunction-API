const functionHandler = require("../Utils/functionHandller.js");
const logger = require("../Utils/logger.js");

module.exports = async function (context, req) {
  try {
    context.log("Delete Product details of given  productId!!!");

    const resultObj = await functionHandler.deleteProductById(req.params.id);

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
