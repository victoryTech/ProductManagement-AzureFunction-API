const { poolPromise } = require("./dbConnection.js");

module.exports.commonOperation = async (parameter, storeProcedure) => {
  try {
    const pool = await poolPromise;
    const request = await pool.request();

    if (parameter.length != 0) {
      if (Array.isArray(parameter)) {
        parameter.forEach((param) => {
          request.input(param.name, param.type, param.value);
        });
      }
    }

    const result = await request.execute(storeProcedure);
    return result;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllAvailableProductsFromDB: async () => {
    try {
      return await this.commonOperation([], "spGetAllAvailableProducts");
    } catch (err) {
      console.log(err);
    }
  },

  getAllAvailableProductDetailsFromDB: async () => {
    try {
      return await this.commonOperation([], "spGetAllAvailableProductsDetails");
    } catch (err) {
      console.log(err);
    }
  },

  getProductByIdFromDB: async (parameter) => {
    try {
      const result = await this.commonOperation(parameter, "spGetProductById");
      return result;
    } catch (err) {
      console.log(err);
    }
  },

  getProductByNameFromDB: async (parameter) => {
    try {
      const result = await this.commonOperation(
        parameter,
        "spGetProductByProductName"
      );
      return result;
    } catch (err) {
      console.log(err);
    }
  },

  insertProductInDB: async (parameter) => {
    try {
      await this.commonOperation(parameter, "spInsertProduct");
    } catch (err) {
      console.log(err);
    }
  },

  updateProductDetailsByIdInDB: async (parameter) => {
    try {
      await this.commonOperation(parameter, "spUpdateProductById");
    } catch (err) {
      console.log(err);
    }
  },

  updateProductQuantityByIdInDB: async (parameter) => {
    try {
      await this.commonOperation(parameter, "spUpdateProductQuantityById");
    } catch (err) {
      console.log(err);
    }
  },

  deleteProductByIdInDB: async (parameter) => {
    try {
      await this.commonOperation(parameter, "spDeleteProductById");
    } catch (err) {
      console.log();
    }
  },

  getProductInfoByNameAndColorFromDB: async (parameter) => {
    try {
      const result = await this.commonOperation(
        parameter,
        "spGetProductInfoByProductNameAndProductColor"
      );
      return result;
    } catch (err) {
      console.log(err);
    }
  },

  getProductColorsByNameFromDB: async (parameter) => {
    try {
      const result = await this.commonOperation(
        parameter,
        "spGetAvailableColorOptionsOfProduct"
      );
      return result;
    } catch (err) {
      console.log(err);
    }
  },

  insertProductWithColorDataInDB: async (parameter) => {
    try {
      await this.commonOperation(parameter, "spInsertProductDetails");
    } catch (err) {
      console.log(err);
    }
  },

  updateProductQuantityOnProductSoldInDB: async (parameter) => {
    try {
      const result = await this.commonOperation(
        parameter,
        "spUpdateProductQuantityOnProductSold"
      );
      return result;
    } catch (err) {
      console.log(err);
    }
  },
};
