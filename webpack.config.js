const path = require("path"); //node에서 기본 제공하는 path 모듈
module.exports = {
  mode : 'development',
  entry: {
    main: "./app.js"
  },
  output: {
    filename: "[name].js",  //entry에서 설정한 이름으로 생성
    path: path.resolve("./dist")
  }
};
