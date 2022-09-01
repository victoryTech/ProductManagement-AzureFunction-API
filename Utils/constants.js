module.exports.STATUSCODE = {
  Success: 200,
  InValid: 400,
  NoContent: 204,
  NoData: 403,
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
