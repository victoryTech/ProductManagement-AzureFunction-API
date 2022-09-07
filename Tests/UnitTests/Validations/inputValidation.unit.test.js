const {
  productDataAcess,
  poolPromise,
} = require("../../__mocks__/commonOperations.js");

const inputValidation = require("../../../Validation/inputValidation.js");

/* Input Parameters */
const hasValidIdPresentInput = require("./InputParameters/hasValidIdPresentInput.json");
const hasValidIdAbsentInput = require("./InputParameters/hasValidIdAbsentInput.json");
const hasValidProductNamePresentInput = require("./InputParameters/hasValidProductNamePresentInput.json");
const hasValidProductNameAbsentInput = require("./InputParameters/hasValidProductNameAbsentInput.json");
const extractProductNameAndColorInput = require("./InputParameters/extractProductNameAndColorInput.json");
const checkAllFieldsOfInsertProductColorDataInput = require("./InputParameters/checkAllFieldsOfInsertProductColorDataInput.json");

/* Output Response */
const hasValidPresentOutputResponse = require("./outputResponse/hasValidPresentOutputResponse.json");
const hasValidIdAbsentOutputResponse = require("./outputResponse/hasValidIdAbsentOutputResponse.json");
const hasValidProductNamePresentOutputResponse = require("./outputResponse/hasValidProductNamePresentOutputRespose.json");
const hasValidProductNameAbsentOutputResponse = require("./outputResponse/hasValidProductNameAbsentOutputRespose.json");
const extractProductNameAndColorOutputResponse = require("./outputResponse/extractProductNameAndColorOutput.json");
const checkAllFieldsOfInsertProductColorDataOutputResponse = require("./outputResponse/checkAllFieldsOfInsertProductColorDataOutput.json");

/* Test */
describe("Test has Valid id", () => {
  test("Test Database, having valid id => true case", async () => {
    const result = await inputValidation.hasValidId(hasValidIdPresentInput);
    expect(result).toBe(hasValidPresentOutputResponse);
  });

  test("Test Database, having valid id => false case", async () => {
    const result = await inputValidation.hasValidId(hasValidIdAbsentInput);
    expect(result).toBe(hasValidIdAbsentOutputResponse);
  });
});

describe("Test Has Valid Product Name", () => {
  test("Test Database, having valid product name => true case", async () => {
    const result = await inputValidation.hasValidProductName(
      hasValidProductNamePresentInput
    );
    expect(result).toBe(hasValidProductNamePresentOutputResponse);
  });

  test("Test Database, having valid product name => false case", async () => {
    const result = await inputValidation.hasValidProductName(
      hasValidProductNameAbsentInput
    );
    expect(result).toBe(hasValidProductNameAbsentOutputResponse);
  });
});

describe("Extracting Product Name and color.", () => {
  test("Extract  Product Name and Product Color From Input", async () => {
    const result = inputValidation.extractProductNameAndColor(
      extractProductNameAndColorInput
    );
    expect(result).toEqual(extractProductNameAndColorOutputResponse);
  });
});

describe("Test to Check All fields of Insert product details is valid acc. to constraint.", () => {
  test("Check All filed of Insert details", async () => {
    const result = inputValidation.checkAllFieldsOfInsertProductColorData(
      checkAllFieldsOfInsertProductColorDataInput
    );
    expect(result).toBe(checkAllFieldsOfInsertProductColorDataOutputResponse);
    // expect(result).toBeTruthy();
  });
});
