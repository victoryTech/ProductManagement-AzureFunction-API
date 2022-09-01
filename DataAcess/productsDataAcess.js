const { poolPromise } = require("./dbConnection.js");

module.exports.commonOperation = async (parameter, storeProcedure) => {
  try {
    const pool = await poolPromise;
    const request = await pool.request();

    if (parameter.length != 0) {
      parameter.forEach((param) => {
        request.input(param.name, param.type, param.value);
      });
    }

    const result = await request.execute(storeProcedure);

    return result;
  } catch (err) {
    console.log(err);
  }
};
