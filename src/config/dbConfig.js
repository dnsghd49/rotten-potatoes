module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Dk_D0om13!",
    DB: "Rotten_Potatoes",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 60000
    }
  };