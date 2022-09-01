const functionHandler = require("../Utils/functionHandller.js");

module.exports = async function (context, req) {
  try {
    context.log("Insert the product details in the Database!!!");

    const resultObj = await functionHandler.insertProduct(req);

    context.res = {
      status: resultObj.statusCode,
      body: resultObj.responseMessage,
    };
  } catch (err) {
    console.log(err);
  }
};
