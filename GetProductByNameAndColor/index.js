const functionHandler = require("../Utils/functionHandller.js");

module.exports = async function (context, req) {
  try {
    context.log("Get details of products by name and color.");

    const resultObj = await functionHandler.getProductDetailsByNameAndColor(
      req
    );

    context.res = {
      status: resultObj.statusCode,
      body: resultObj.responseMessage,
    };
  } catch (err) {
    console.log(err);
  }
};
