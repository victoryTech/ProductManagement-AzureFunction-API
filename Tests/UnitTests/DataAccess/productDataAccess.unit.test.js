const {
  productDataAcess,
  poolPromise,
} = require("../../__mocks__/commonOperations.js");

const sql = require("../../../DataAcess/dbConnection.js");

const constants = require("../../../Utils/constants.js");

const executeProductByIdOutput = require("./Output_Response/executeProductByIdOutput.json");
const executeInsertProductDetailsOutput = require("./Output_Response/executeInsertProductDetailsOutput.json");
const executePartiallyUpdateQuantityByIdOutput = require("./Output_Response/executePartiallyUpdateQuantityOutput.json");
const executeGetAllProductsDetailsOutput = require("./Output_Response/executeGetAllProductDetailsOutput.json");
const executeDeleteProductDetailsByIdOutput = require("./Output_Response/executeDeleteProductDetailsByIdOutput.json");

test("Test Get Product By Id", async () => {
  const sqlParameters = [];

  sqlParameters.push({
    name: "productId",
    type: sql.Int,
    value: 6,
  });

  const result = await productDataAcess.commonOperation(
    sqlParameters,
    constants.STOREPROCEDURE.GetProductById
  );
  expect(result).toEqual(executeProductByIdOutput);
});

test("Test Insert Product Details", async () => {
  const sqlParameters = [];
  sqlParameters.push({
    name: "productId",
    type: sql.Int,
    value: 6,
  });
  sqlParameters.push({
    name: "productName",
    type: sql.NVarChar,
    value: "Demo",
  });
  sqlParameters.push({
    name: "productPrice",
    type: sql.Int,
    value: 1,
  });
  sqlParameters.push({
    name: "productQuantity",
    type: sql.Int,
    value: 100,
  });

  const result = await productDataAcess.commonOperation(
    sqlParameters,
    constants.STOREPROCEDURE.InsertProductDetails
  );

  expect(result).toEqual(executeInsertProductDetailsOutput);
});

test("Test Partially Update Product By Id.", async () => {
  const sqlParameters = [];
  sqlParameters.push({
    name: "productId",
    type: sql.Int,
    value: 6,
  });
  sqlParameters.push({
    name: "productQuantity",
    type: sql.Int,
    value: 50,
  });

  const result = await productDataAcess.commonOperation(
    sqlParameters,
    constants.STOREPROCEDURE.UpdateProductQuantityById
  );

  expect(result).toEqual(executePartiallyUpdateQuantityByIdOutput);
});

test("Test Get All Available Porduct details", async () => {
  const sqlParameters = [];

  const result = await productDataAcess.commonOperation(
    sqlParameters,
    constants.STOREPROCEDURE.GetAllAvailableProductsDetails
  );

  expect(result).toEqual(executeGetAllProductsDetailsOutput);
});

test("Test delete product details by id", async () => {
  const sqlParameters = [];
  sqlParameters.push({
    name: "productId",
    type: sql.Int,
    value: 6,
  });

  const result = await productDataAcess.commonOperation(
    sqlParameters,
    constants.STOREPROCEDURE.DeleteProductById
  );

  expect(result).toEqual(executeDeleteProductDetailsByIdOutput);
});
