// 自定义loader
const loaderUtils = require('loader-utils');

module.exports = function(source) {
    let options = loaderUtils.getOptions(this);
    for (let [key, value] of Object.entries(options)) {
        source = source.replace(`{{${key}}}`, value);
    }
    return source;
}