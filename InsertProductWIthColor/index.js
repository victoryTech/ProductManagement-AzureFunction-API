const functionHandler = require("../Utils/functionHandller.js");
const logger = require("../Utils/logger.js");

module.exports = async function (context, req) {
  try {
    context.log("Insert the product details with color in the Database!!!");

    const resultObj = await functionHandler.insertProductWithColorData(req);

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
    clogger.log("error", { error: err });
  }
};
