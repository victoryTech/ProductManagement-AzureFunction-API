const deleteProductDetailByIdController = require("../../../DeleteProductById/index.js");
require("../../__mocks__/commonOperations.js");

const mockContext = require("../../defaultContext.js");
const constants = require("../../../Utils/constants.js");

const deletePoroductByIdInput = require("./InputParameters/deleteProductDetailsByIdInput.json");

test("Test delete product details by id", async () => {
  const request = {
    method: "DELETE",
    params: deletePoroductByIdInput,
  };

  await deleteProductDetailByIdController(mockContext, request);
  expect(mockContext.res.status).toEqual(constants.STATUSCODE.Success);
});
