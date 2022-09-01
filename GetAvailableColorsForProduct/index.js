const functionHandler = require("../Utils/functionHandller.js");

module.exports = async function (context, req) {
  try {
    context.log("Get All Color option for particular product!!!");

    const resultObj = await functionHandler.getColorOptionsForProduct(req);

    context.res = {
      status: resultObj.statusCode,
      body: resultObj.responseMessage,
    };
  } catch (err) {
    console.log(err);
  }
};
