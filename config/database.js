module.exports = {
  hrPool: {
    user: "hr",//process.env.HR_USER,
    password: "password",//process.env.HR_PASSWORD,
    connectString: "localhost:1521/xepdb1",//process.env.HR_CONNECTIONSTRING,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
  }
};