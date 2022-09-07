let { sql, poolPromise } = require("../../DataAcess/dbConnection.js");
const productDataAcess = require("../../DataAcess/productsDataAcess.js");
const constants = require("../../Utils/constants.js");

const executeInsertProductDetails_Metadata = require("../UnitTests/DataAccess/SP_Metadata/executeInsertProduct_Metadata.json");
const executeProductById_Metadata = require("../UnitTests/DataAccess/SP_Metadata/executeGetProductById_Metadata.json");
const executePartiallyUpdateProductQuantity_Metadata = require("../UnitTests/DataAccess/SP_Metadata/executePartiallyUpdateQuantity_Metadata.json");
const executeGetAllProductDetails_Metadata = require("../UnitTests/DataAccess/SP_Metadata/executeGetAllProductDetails_Metadata.json");
const executeDeleteProductDetailsById_Metadata = require("../UnitTests/DataAccess/SP_Metadata/executeDeleteProductDetailsById_Metadata.json");

const mockConnection = {
  connect: jest.fn().mockResolvedValue(),
};

poolPromise = jest.fn().mockResolvedValue(mockConnection);

productDataAcess.commonOperation = jest.fn((parameter, storedProcedure) => {
  switch (storedProcedure) {
    case constants.STOREPROCEDURE.GetProductById:
      return executeProductById_Metadata;
    case constants.STOREPROCEDURE.InsertProductDetails:
      return executeInsertProductDetails_Metadata;
    case constants.STOREPROCEDURE.UpdateProductQuantityById:
      return executePartiallyUpdateProductQuantity_Metadata;
    case constants.STOREPROCEDURE.GetAllAvailableProductsDetails:
      return executeGetAllProductDetails_Metadata;
    case constants.STOREPROCEDURE.DeleteProductById:
      return executeDeleteProductDetailsById_Metadata;
  }
});

module.exports = {
  productDataAcess: productDataAcess,
  poolPromise: poolPromise,
};
