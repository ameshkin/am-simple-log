# SIMPLE LOGGER

This package was created for learning purposes. It's the second NPM package I've made and the first public one.



## HOW TO USE

Run `npm install` to install the package and use the example below for usage.


```javascript

import Log from 'am-simple-log'

// set this universally
var debug = true;

var testobj = {"test":"Object"};

/**
 * USAGE
 * @param str
 * @param line
 * @param debug
 */
Log.err("Test Log","100",debug);
Log.err(testobj,"102",debug);

```
