const getProductByIdController = require("../../../GetProductById/index.js");
require("../../__mocks__/commonOperations.js");

const mockContext = require("../../defaultContext.js");
const constants = require("../../../Utils/constants.js");

const getPoroductByIdInput = require("./InputParameters/getProductByIdInput.json");

test("Test Get Product Details By Product Id", async () => {
  const request = {
    method: "GET",
    params: getPoroductByIdInput,
  };

  await getProductByIdController(mockContext, request);
  expect(mockContext.res.status).toEqual(constants.STATUSCODE.Success);
});
