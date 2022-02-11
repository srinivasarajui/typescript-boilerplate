"use strict";
const { I } = inject();
module.exports = {
    goToHome: () => {
        I.amOnPage('/');
    }
};
