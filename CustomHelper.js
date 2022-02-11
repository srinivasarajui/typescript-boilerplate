"use strict";
class CustomHelper extends Helper {
    constructor(config) {
        super(config);
        this.helpers;
    }
    printMessage(msg) {
        console.log(msg);
    }
    printHelpers() {
        console.log('Helpers enabled', Object.keys(this.helpers));
    }
}
module.exports = CustomHelper;
