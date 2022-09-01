const functionHandler = require("../Utils/functionHandller.js");

module.exports = async function (context, req) {
  try {
    context.log("Get All the details of available products.!!!");

    const resultObj = await functionHandler.getDetailsOfAllProducts();

    context.res = {
      status: resultObj.statusCode,
      body: resultObj.responseMessage,
    };
  } catch (err) {
    console.log(err);
  }
};
