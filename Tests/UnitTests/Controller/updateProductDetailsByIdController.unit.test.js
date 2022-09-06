const updateProductDetailsController = require("../../../UpdateProductById/index.js");
require("../../__mocks__/commonOperations.js");

const mockContext = require("../../defaultContext.js");
const constants = require("../../../Utils/constants.js");

const updateProductDetailsInput = require("./InputParameters/updateProductDetailsByIdInput.json");
const updateProductIdInput = require("./InputParameters/updateProductDetailsIdInput.json");

test("Test Update product details by Id", async () => {
  const request = {
    method: "PUT",
    params: updateProductIdInput,
    body: updateProductDetailsInput,
  };

  await updateProductDetailsController(mockContext, request);
  expect(mockContext.res.status).toEqual(constants.STATUSCODE.Success);
});
