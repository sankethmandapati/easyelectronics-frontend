const urls = {
    dev: 'http://127.0.0.1:4000',
    prod: 'http://3.16.10.225:4000'
};
const env = "dev";
module.exports = {
    baseUrl: urls[env]
};