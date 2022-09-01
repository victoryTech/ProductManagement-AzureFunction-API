const functionHandler = require("../Utils/functionHandller.js");

module.exports = async function (context, req) {
  try {
    context.log("Update Product Quantity on Product Sold.");

    const resultObj = await functionHandler.updateProductQuantityOnProductSold(
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
