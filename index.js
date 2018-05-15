var exports = module.exports = {};

/**
 * Simple error logging function
 * @param str
 * @param line
 * @param debug
 */
exports.err = function(str,line,debug) {

    switch (typeof(str)) {
        case "string":
            console.log(line + ": " + str);
            break;
        case "object":
            console.log(line + ": ");
            console.dir(str);
            break;
        case "array":
            console.log(line + ": ");
            console.dir(str);
            break;
    }

};

/**
 * TODO: Create Error wrapper for console
 * @param str
 * @param line
 * @param debug
 * @returns {string}
 */
exports.console_err = function(str,line,debug) {
    return "finish this";
};