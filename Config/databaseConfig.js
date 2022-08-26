const config = {
  user: "sa",
  password: "12345",
  database: "AzureDatabase",
  server: "DESKTOP-R6D3R5Q",
  port: 1433,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    trustServerCertificate: true,
  },
};

module.exports = config;
