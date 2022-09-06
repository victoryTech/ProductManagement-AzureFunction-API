module.exports.STATUSCODE = {
  Success: 200,
  InValid: 400,
  NoContent: 204,
  NoData: 403,
};

module.exports.RESPONSE_MESSAGES = {
  DataInsert: "Data Inserted Successfully",
  DataUpdate: "Data Updated Successfully",
  DataUpsert: "Operation Completed Successfully",
};

module.exports.STOREPROCEDURE = {
  GetAllAvailableProducts: "spGetAllAvailableProducts",
  GetAllAvailableProductsDetails: "spGetAllAvailableProductsDetails",
  GetProductById: "spGetProductById",
  GetProductDetailsByName: "spGetProductByProductName",
  InsertProductDetails: "spInsertProduct",
  UpdateProductDetailsById: "spUpdateProductById",
  UpdateProductQuantityById: "spUpdateProductQuantityById",
  DeleteProductById: "spDeleteProductById",
  GetProductDetailsByNameAndColor:
    "spGetProductInfoByProductNameAndProductColor",
  GetColorOptionsByName: "spGetAvailableColorOptionsOfProduct",
  InsertProductDetailsWithColor: "spInsertProductDetails",
  UpdateProductQuantityOnProductSell: "spUpdateProductQuantityOnProductSold",
};
