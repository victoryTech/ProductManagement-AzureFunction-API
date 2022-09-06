const partiallyUpdateProductQuantityController = require("../../../PartiallyUpdateProductById/index.js");
require("../../__mocks__/commonOperations.js");

const mockContext = require("../../defaultContext.js");
const constants = require("../../../Utils/constants.js");

const partiallyUpdateProductQuantityInput = require("./InputParameters/partiallyUpdateProductQuantityInput.json");
const partiallyUpdateProductIdInput = require("./InputParameters/partiallyUpdateProductIdInput.json");

test("Test Partially update product Quantity by Id", async () => {
  const request = {
    method: "PATCH",
    params: partiallyUpdateProductIdInput,
    body: partiallyUpdateProductQuantityInput,
  };
  await partiallyUpdateProductQuantityController(mockContext, request);
  expect(mockContext.res.status).toEqual(constants.STATUSCODE.InValid);
});
