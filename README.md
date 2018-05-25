# SIMPLE LOGGER

A simple wrapper to use instead of `console.dir()` and `console.log()`





## HOW TO USE

Run `npm install` to install the package and use the example below for usage.


```javascript

import Log from 'am-simple-log'

// set this universally
var debug = true;

var testobj = {"test":"Object"};

/**
 * USAGE
 * @param str     Error Messae
 * @param line    Line Number of Error
 * @param debug   Debug Flag  
 */

Log.err("Test Log Message","100",debug);
Log.err(testobj,"102",debug);

```
