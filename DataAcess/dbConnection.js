const sql = require("mssql");
const config = require("../Config/databaseConfig.js");

let poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    // console.log("Connected to MSSQL Databse.");
    return pool;
  })
  .catch((err) =>
    console.log(`Database Connection failed! Bad Config : ${err}`)
  );

module.exports = {
  sql: sql,
  poolPromise: poolPromise,
};
