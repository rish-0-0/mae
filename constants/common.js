const version = require("./package.json").version;
const jwtSecret = "sometopsecretstring";
const host = "0.0.0.0";
const serverPort = 4000;

module.exports = {
    version,
    jwtSecret,
    host,
    serverPort
}