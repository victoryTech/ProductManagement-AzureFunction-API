const insertProductDetailsController = require("../../../InsertProduct/index.js");
require("../../__mocks__/commonOperations.js");

const mockContext = require("../../defaultContext.js");
const constants = require("../../../Utils/constants.js");

const insertProductDetailsInput = require("./InputParameters/insertProductDetailsInput.json");

test("Test Insert Product Details", async () => {
  const request = {
    method: "POST",
    body: insertProductDetailsInput,
  };

  await insertProductDetailsController(mockContext, request);

  expect(mockContext.res.status).toEqual(constants.STATUSCODE.InValid);
});
