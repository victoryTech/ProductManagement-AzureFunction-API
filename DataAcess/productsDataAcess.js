const { poolPromise } = require("./dbConnection.js");

module.exports = {
  getAllAvailableProductsFromDB: async () => {
    let pool = await poolPromise;
    let request = await pool.request();
    let result = await request.execute("spGetAllAvailableProducts");
    return result;
  },

  getAllAvailableProductDetailsFromDB: async () => {
    let pool = await poolPromise;
    let request = await pool.request();
    let result = await request.execute("spGetAllAvailableProductsDetails");
    return result;
  },

  getProductByIdFromDB: async (parameter) => {
    let pool = await poolPromise;
    let request = await pool.request();

    if (Array.isArray(parameter)) {
      parameter.forEach((param) => {
        request.input(param.name, param.type, param.value);
      });
    }

    let result = await request.execute("spGetProductById");
    return result;
  },

  getProductByNameFromDB: async (parameter) => {
    let pool = await poolPromise;
    let request = await pool.request();

    if (Array.isArray(parameter)) {
      parameter.forEach((param) => {
        request.input(param.name, param.type, param.value);
      });
    }

    let result = await request.execute("spGetProductByProductName");
    return result;
  },

  insertProductInDB: async (parameter) => {
    let pool = await poolPromise;
    let request = await pool.request();

    if (Array.isArray(parameter)) {
      parameter.forEach((param) => {
        request.input(param.name, param.type, param.value);
      });
    }

    await request.execute("spInsertProduct");
  },

  updateProductDetailsByIdInDB: async (parameter) => {
    let pool = await poolPromise;
    let request = await pool.request();

    if (Array.isArray(parameter)) {
      parameter.forEach((param) => {
        request.input(param.name, param.type, param.value);
      });
    }
    await request.execute("spUpdateProductById");
  },

  updateProductQuantityByIdInDB: async (parameter) => {
    let pool = await poolPromise;
    let request = await pool.request();

    if (Array.isArray(parameter)) {
      parameter.forEach((param) => {
        request.input(param.name, param.type, param.value);
      });
    }
    await request.execute("spUpdateProductQuantityById");
  },

  deleteProductByIdInDB: async (parameter) => {
    let pool = await poolPromise;
    let request = await pool.request();

    if (Array.isArray(parameter)) {
      parameter.forEach((param) => {
        request.input(param.name, param.type, param.value);
      });
    }

    await request.execute("spDeleteProductById");
  },

  getProductInfoByNameAndColorFromDB: async (parameter) => {
    let pool = await poolPromise;
    let request = await pool.request();

    if (Array.isArray(parameter)) {
      parameter.forEach((param) => {
        request.input(param.name, param.type, param.value);
      });
    }

    let result = await request.execute(
      "spGetProductInfoByProductNameAndProductColor"
    );
    return result;
  },

  getProductColorsByNameFromDB: async (parameter) => {
    let pool = await poolPromise;
    let request = await pool.request();
    if (Array.isArray(parameter)) {
      parameter.forEach((param) => {
        request.input(param.name, param.type, param.value);
      });
    }

    let result = await request.execute("spGetAvailableColorOptionsOfProduct");
    return result;
  },

  insertProductWithColorDataInDB: async (parameter) => {
    let pool = await poolPromise;
    let request = await pool.request();
    if (Array.isArray(parameter)) {
      parameter.forEach((param) => {
        request.input(param.name, param.type, param.value);
      });
    }

    await request.execute("spInsertProductDetails");
  },
};
