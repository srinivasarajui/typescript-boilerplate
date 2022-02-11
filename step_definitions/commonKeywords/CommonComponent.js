"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonComponent = void 0;
require("codeceptjs");
const logger_1 = require("../../common/Logger/logger");
const config_1 = require("../../common/config");
const CommonComponentObject_1 = require("./CommonComponentObject");
const AuroraLmt_1 = require("../../common/Data/AuroraLmt");
const z_1 = require("actionbot-wrapper/z");
const GlobalVariables_1 = require("../../common/dataCreation/GlobalVariables");
const AuroraContractDetailsElements_1 = require("../Repository/Contract Details/AuroraContractDetailsElements");
const { I } = inject();
class CommonComponent {
    /**
     * Verifies if element is present in DOM of a page.
     * @param {string} xpath
     * @param {number} timeout
     * @returns {boolean} boolean
     * @author om.pawar
     */
    static async getElementDomStatus(xpath, timeout) {
        this.count = 0;
        return new Promise(async (resolve, reject) => {
            let interval = setInterval(async () => {
                if (this.count < timeout) {
                    this.count++;
                }
                else {
                    clearInterval(interval);
                    resolve(false);
                }
                let element = await z_1.z.executeScript((xpath) => {
                    return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                }, xpath);
                if (element) {
                    clearInterval(interval);
                    resolve(true);
                }
            }, 1000);
        }).catch(() => {
            logger_1.logger.info(`Error occurred in promise function "getElementDomStatus"`);
            // resolve(false);
            return false;
        });
    }
    /**
     * Verifies if element is present in the viewport.
     * @param {string} xpath
     * @param {number} timeout
     * @returns {boolean} boolean
     * @author om.pawar
     */
    static async getElementViewportStatus(xpath, timeout) {
        let isPresent = await this.getElementDomStatus(xpath, timeout);
        this.count = 0;
        if (isPresent) {
            return new Promise(async (resolve, reject) => {
                let interval = setInterval(async () => {
                    if (this.count < timeout) {
                        this.count++;
                    }
                    else {
                        clearInterval(interval);
                        resolve(false);
                    }
                    let bounding = await z_1.z.executeScript(function (xpath) {
                        let element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                        if (element) {
                            return element.getBoundingClientRect();
                        }
                    }, xpath).catch(async (e) => {
                        logger_1.logger.info(`Exception occurred in promise function "getElementViewportStatus" \n ${e}`);
                        clearInterval(interval);
                        resolve(false);
                    });
                    let boundingRight = await z_1.z.executeScript(() => {
                        return window.innerWidth || document.documentElement.clientWidth;
                    });
                    let boundingBottom = await z_1.z.executeScript(() => {
                        return window.innerHeight || document.documentElement.clientHeight;
                    });
                    if (bounding) {
                        if (bounding.top >= 0 &&
                            bounding.left >= 0 &&
                            bounding.right <= boundingRight &&
                            bounding.bottom <= boundingBottom) {
                            clearInterval(interval);
                            resolve(true);
                        }
                    }
                }, 1000);
            }).catch(async () => {
                logger_1.logger.info(`Error occurred in promise function "getElementViewportStatus"`);
                // resolve(false);
                return false;
            });
        }
        else {
            // throw new Error(`Element '${xpath}' is not present after ${timeout} sec`);
            return isPresent;
        }
    }
    /**
    * Search and Select Value from drop down
    * @param {*} dropdownElement
    * @param {*} searchValue
    * @param {*} selectOptionXpath
    * @returns {string} selectedValue
    */
    static async searchAndSelectFromDropdown(dropdownElement, searchValue, selectOptionXpath) {
        await z_1.z.waitForVisible(dropdownElement);
        await z_1.z.waitForClickable(dropdownElement);
        await z_1.z.click(dropdownElement);
        await z_1.z.wait(config_1.prop.DEFAULT_WAIT);
        await z_1.z.clearField(dropdownElement);
        if (searchValue.toString() !== null) {
            await z_1.z.fillField(dropdownElement, searchValue);
            await z_1.z.waitForVisible(selectOptionXpath, config_1.prop.DEFAULT_HIGH_WAIT);
            await z_1.z.click(selectOptionXpath);
            let value = await z_1.z.grabAttributeFrom(dropdownElement, "value");
            return value;
        }
        else {
            throw new Error("Search Value is Invalid.....");
        }
    }
    /**
    * To select value from dropdown based on hardcoded xpath
    * @param {string} dropdownElement
    * @param {string} selectOption
    * @author somnath.k
    */
    static async selectValueFromDropDown(dropdownElement, selectOption) {
        await z_1.z.waitForVisible(dropdownElement);
        await z_1.z.waitForClickable(dropdownElement);
        await z_1.z.click(dropdownElement);
        if (selectOption !== "undefined") {
            let xpath = `//*[contains(text(),'${selectOption}')]`;
            await z_1.z.scrollIntoView(xpath);
            await z_1.z.click(xpath);
            logger_1.logger.info(`Selected Value from Drop Down: ${selectOption}`);
        }
        else {
            logger_1.logger.info("Select Option in null....");
        }
    }
    /**
    * To select value from dropddown based on double click on selectoption xpath
    * @param {string} dropdownElement
    * @param {string} selectOptionxpath
    * @author somnath.k
    */
    static async selectValueFromDropDownByXpath(dropdownElement, selectOptionxpath) {
        await z_1.z.waitForVisible(dropdownElement);
        await z_1.z.waitForClickable(dropdownElement);
        await z_1.z.click(dropdownElement);
        if (selectOptionxpath !== "undefined") {
            await z_1.z.scrollIntoView(selectOptionxpath);
            await z_1.z.doubleClick(selectOptionxpath);
        }
        else {
            logger_1.logger.info("Select Option xpath is null....");
        }
    }
    /**
    * To select value from the dropdown based on random text selection through dynamic option xpath
    * @param {string} dropdownXpath
    * @param {string} optionListxpath
    * @param {string} dynParticularOptionxpath
    * @author somnath.k
    */
    static async selectValueFromDropdownRandom(dropdownXpath, optionListxpath, dynParticularOptionxpath) {
        await z_1.z.waitForElement(dropdownXpath);
        await z_1.z.click(dropdownXpath);
        let optionlistCount = await CommonComponent.grabNumberElements(optionListxpath);
        let randomCount = await this.getRandomNumber(optionlistCount);
        let tempXpath;
        if (randomCount == 0) {
            randomCount = randomCount + 1;
        }
        if (dynParticularOptionxpath.includes("TempCount")) {
            tempXpath = dynParticularOptionxpath.replace("TempCount", "" + randomCount);
            let optionValue = await z_1.z.grabTextFrom(tempXpath);
            if (optionValue.toLowerCase() == "select") {
                randomCount = randomCount + 1;
                tempXpath = dynParticularOptionxpath.replace("TempCount", "" + randomCount);
            }
            await z_1.z.selectOption(dropdownXpath, await z_1.z.grabTextFrom(tempXpath));
        }
        else {
            logger_1.logger.info("particular option xpath deoesnt contain TempCount keyword");
        }
    }
    /**
    * To select value from the dropdown based on random text selection
    * @param {string} dropdownXpath
    * @param {string} optionListxpath
    * @author somnath.k
    */
    static async selectRandomValueFromDropdownBasedonOptionXpath(dropdownXpath, optionListxpath) {
        await z_1.z.waitForElement(dropdownXpath);
        await z_1.z.click(dropdownXpath);
        let optionXpathList = await this.retrieveElementXpathBasedonIndex(optionListxpath);
        let optionlistCount = optionXpathList.length;
        let randomCount = await this.getRandomNumber(optionlistCount);
        let tempXpath;
        if (randomCount == 0) {
            randomCount = randomCount + 1;
        }
        await z_1.z.selectOption(dropdownXpath, await z_1.z.grabTextFrom(optionXpathList[randomCount]));
    }
    /**
    * To click value from the dropdown based on random option xpath
    * @param {string} dropdownXpath
    * @param {string} optionListxpath
    * @author somnath.k
    */
    static async clickRandomValueFromDropdownBasedonOptionXpath(dropdownXpath, optionListxpath) {
        await z_1.z.waitForElement(dropdownXpath);
        await z_1.z.click(dropdownXpath);
        let optionXpathList = await this.retrieveElementXpathBasedonIndex(optionListxpath);
        let optionlistCount = optionXpathList.length;
        let randomCount = await this.getRandomNumber(optionlistCount);
        await z_1.z.click(optionXpathList[randomCount]);
    }
    /**
    * Search random value from the dropdown and click value from the dropdown
    * @param {string} dropdownXpath
    * @param {string} optionListxpath
    * @param {string} searchBoxXpath
    * @author somnath.k
    */
    static async searchRandomValueAndSelectinDropdownByClick(dropdownXpath, optionListxpath, searchBoxXpath) {
        await z_1.z.waitForElement(dropdownXpath);
        await z_1.z.click(dropdownXpath);
        let optionXpathList = await this.retrieveElementXpathBasedonIndex(optionListxpath);
        if (optionXpathList.length != 0) {
            let optionlistCount = optionXpathList.length;
            let randomCount = await this.getRandomNumber(optionlistCount);
            let searchString = await z_1.z.grabTextFrom(optionXpathList[randomCount]);
            await z_1.z.fillField(searchBoxXpath, searchString);
            optionXpathList = await this.retrieveElementXpathBasedonIndex(optionListxpath);
            await z_1.z.click(optionXpathList[0]);
        }
        else {
            logger_1.logger.info("Dropdown is not having any option in the list,so cannot be filled,skipped");
        }
    }
    /**
    * Search in the dropdown and click value from the dropdown
    * @param {string} dropdownXpath
    * @param {string} optionListxpath
    * @param {string} searchBoxXpath
    * @param {string} searchValue
    * @author somnath.k
    */
    static async searchValueAndSelectinDropdownByClick(dropdownXpath, optionListxpath, searchBoxXpath, searchValue) {
        await z_1.z.waitForElement(dropdownXpath);
        await z_1.z.click(dropdownXpath);
        let optionXpathList = await this.retrieveElementXpathBasedonIndex(optionListxpath);
        if (optionXpathList.length != 0) {
            await z_1.z.fillField(searchBoxXpath, searchValue);
            optionXpathList = await this.retrieveElementXpathBasedonIndex(optionListxpath);
            await z_1.z.click(optionXpathList[0]);
        }
        else {
            logger_1.logger.info("Dropdown is not having any option in the list,so cannot be filled,skipped");
        }
    }
    /**
    * Search random value from the dropdown and select value from the dropdown
    * @param {string} dropdownXpath
    * @param {string} optionListxpath
    * @param {string} searchBoxXpath
    * @author somnath.k
    */
    static async searchRandomValueAndSelectinDropdownBySelectOption(dropdownXpath, optionListxpath, searchBoxXpath) {
        await z_1.z.waitForElement(dropdownXpath);
        await z_1.z.click(dropdownXpath);
        let optionXpathList = await this.retrieveElementXpathBasedonIndex(optionListxpath);
        let optionlistCount = optionXpathList.length;
        let randomCount = await this.getRandomNumber(optionlistCount);
        let searchString = await z_1.z.grabTextFrom(optionXpathList[randomCount]);
        await z_1.z.fillField(searchBoxXpath, searchString);
        await z_1.z.selectOption(dropdownXpath, searchString);
    }
    /**
    * select random value from the list
    * @param {string} valueListXpath
    * @param {string} dynParticularValuexpath
    * @author somnath.k
    */
    static async selectRandomValueFromList(valueListXpath, dynParticularValuexpath) {
        let optionlistCount = await CommonComponent.grabNumberElements(valueListXpath);
        let randomCount = await this.getRandomNumber(optionlistCount);
        let tempXpath;
        if (randomCount == 0) {
            randomCount = randomCount + 1;
        }
        if (dynParticularValuexpath.includes("TempCount")) {
            tempXpath = dynParticularValuexpath.replace("TempCount", "" + randomCount);
            await z_1.z.click(tempXpath);
        }
        else {
            logger_1.logger.info("particular option xpath deoesnt contain TempCount keyword");
        }
    }
    /**
    * Select and click value from the dropdown based on option index value for grid
    * @param {string} dropdownXpath
    * @param {string} optionListXpath
    * @param {string} optionIndex
    * @author somnath.k
    */
    static async gridDropdownSelectionBasedonValue(dropdownXpath, optionListXpath, optionIndex) {
        await z_1.z.click(dropdownXpath);
        let optionXpathList = await this.retrieveElementXpathBasedonIndex(optionListXpath);
        let selectedOptionXpath = optionXpathList[optionIndex];
        let optionValue = await z_1.z.grabTextFrom(selectedOptionXpath);
        await z_1.z.click(dropdownXpath);
        await z_1.z.selectOption(dropdownXpath, optionValue);
        await z_1.z.click(dropdownXpath);
        await z_1.z.moveCursorTo(selectedOptionXpath);
        await z_1.z.pressKey("Enter");
    }
    static async selectValueFromGridDropDown(dropdownXpath, option) {
        await z_1.z.selectOption(dropdownXpath, option);
        await z_1.z.pressKey("Enter");
    }
    /**
    * Select and click value from the dropdown based on random option index value for grid
    * @param {string} dropdownXpath
    * @param {string} optionListXpath
    * @author somnath.k
    */
    static async gridDropdownSelectionBasedonRandomValue(dropdownXpath, optionListXpath) {
        await z_1.z.click(dropdownXpath);
        let optionXpathList = await this.retrieveElementXpathBasedonIndex(optionListXpath);
        let optionCount = await this.getRandomNumber(optionXpathList.length);
        let selectedOptionXpath = optionXpathList[optionCount];
        let optionValue = await z_1.z.grabTextFrom(selectedOptionXpath);
        await z_1.z.click(dropdownXpath);
        await z_1.z.selectOption(dropdownXpath, optionValue);
        await z_1.z.click(dropdownXpath);
        await z_1.z.moveCursorTo(selectedOptionXpath);
        await z_1.z.pressKey("Enter");
    }
    /**
    * Select and click value from the dropdown based on string value as input for grid
    * @param {string} dropdownXpath
    * @param {string} optionListXpath
    * @param {string} stringValue
    * @author somnath.k
    */
    static async gridDropdownSelectionBasedonStringValue(dropdownXpath, optionListXpath, stringValue) {
        let count = 0;
        await z_1.z.click(dropdownXpath);
        let optionXpathList = await this.retrieveElementXpathBasedonIndex(optionListXpath);
        let optionTextList = await this.retrieveUITextListBasedonIndexWithSingleXpath(optionListXpath);
        for (let i = 0; i < optionTextList.length; i++) {
            if (optionTextList[i].trim() == stringValue.trim()) {
                break;
            }
            else {
                count++;
            }
        }
        let selectedOptionXpath = optionXpathList[count];
        let optionValue = await z_1.z.grabTextFrom(selectedOptionXpath);
        await z_1.z.click(dropdownXpath);
        await z_1.z.selectOption(dropdownXpath, optionValue);
        await z_1.z.click(dropdownXpath);
        await z_1.z.moveCursorTo(selectedOptionXpath);
        await z_1.z.pressKey("Enter");
    }
    /**
    * Search contract in the grid based on filterTextBox
    * @param {string} filterTextBoxXpath
    * @param {String} searchValue
    * @author somnath.k
    */
    static async gridNormalTextBoxSearch(filterTextBoxXpath, searchValue) {
        await z_1.z.fillField(filterTextBoxXpath, searchValue);
        await z_1.z.pressKey("Enter");
    }
    /**
    * Click random value from the List
    * @param {string} valueListXpath
    * @author somnath.k
    */
    static async clickRandomValueFromList(valueListXpath) {
        let valueXpathList = await this.retrieveElementXpathBasedonIndex(valueListXpath);
        let optionlistCount = valueXpathList.length;
        let randomCount = await this.getRandomNumber(optionlistCount);
        let selectedValue = await z_1.z.grabTextFrom(valueXpathList[randomCount]);
        await z_1.z.click(valueXpathList[randomCount]);
        return selectedValue;
    }
    /**
    * Click random unique value from the dropdown
    * @param {string} valueListXpath
    * @param {string} UIValue
    * @return {number} optionlistCount
    * @author somnath.k
    */
    static async clickRandomUniqueValueFromList(valueListXpath, UIValue) {
        let valueXpathList = await this.retrieveElementXpathBasedonIndex(valueListXpath);
        let optionlistCount = valueXpathList.length;
        let randomCount;
        if (optionlistCount == 1) {
            logger_1.logger.info("Field is having only one value in the dropdown");
            randomCount = 0;
        }
        else {
            randomCount = await this.getRandomNumber(optionlistCount);
            if (await z_1.z.grabTextFrom(valueXpathList[randomCount]) == UIValue) {
                if (randomCount == 0) {
                    randomCount = randomCount + 1;
                }
                else {
                    randomCount = randomCount - 1;
                }
            }
        }
        await z_1.z.click(valueXpathList[randomCount]);
        return optionlistCount;
    }
    /**
    * To get ui text values from the dropdown based on the index value in between the xpath
    * @param {string} valueListXpath
    * @param {string} dynParticularValuexpath
    * @return {String[]} uiTextList
    * @author somnath.k
    */
    static async retrieveUITextListBasedonIndex(valueListXpath, dynParticularValuexpath) {
        let optionlistCount = await CommonComponent.grabNumberElements(valueListXpath);
        let tempXpath;
        let uiTextList = [];
        for (let i = 1; i <= optionlistCount; i++) {
            if (dynParticularValuexpath.includes("TempCount")) {
                tempXpath = dynParticularValuexpath.replace("TempCount", "" + i);
                if (await CommonComponent.isEnabledByXpath(tempXpath)) {
                    let textValue = await z_1.z.grabTextFrom(tempXpath);
                    uiTextList.push(textValue);
                }
                else {
                    break;
                }
            }
            else {
                logger_1.logger.info("particular option xpath deoesnt contain TempCount keyword");
            }
        }
        return uiTextList;
    }
    /**
    * To get random text from UI from xpath list
    * @param {string} tempValue
    * @param {string} dynValuexpath
    * @return {String} UiTextvalue
    * @author somnath.k
    */
    static async getRandomTextFromList(valueListXpath) {
        let multpleXpath = await this.retrieveElementXpathBasedonIndex(valueListXpath);
        let randomValue = await this.getRandomNumber(multpleXpath.length);
        let UiTextvalue = await z_1.z.grabTextFrom(multpleXpath[randomValue]);
        return UiTextvalue;
    }
    /**
    * To get random element from xpath list
    * @param {string} tempValue
    * @param {string} dynValuexpath
    * @return {String} XpathElement
    * @author somnath.k
    */
    static async getRandomElementFromList(valueListXpath) {
        let multpleXpath = await this.retrieveElementXpathBasedonIndex(valueListXpath);
        let randomValue = await this.getRandomNumber(multpleXpath.length);
        return multpleXpath[randomValue];
    }
    /**
    * To get ui text values from single xpath
    * @param {string} valueListXpath
    * @return {String[]} uiTextList
    * @author somnath.k
    */
    static async retrieveUITextListBasedonIndexWithSingleXpath(valueListXpath) {
        let uiTextList = [];
        let multpleXpath = await this.retrieveElementXpathBasedonIndex(valueListXpath);
        for (let i = 0; i < multpleXpath.length; i++) {
            let UiTextvalue = await z_1.z.grabTextFrom(multpleXpath[i]);
            uiTextList.push(UiTextvalue);
        }
        return uiTextList;
    }
    /**
    * To get ui text values from single xpath using javascript(not for dropdown)
    * @param {string} valueListXpath
    * @return {String[]} uiTextList
    * @author somnath.k
    */
    static async retrieveUITextListBasedonIndexWithSingleXpathusingjavascript(valueListXpath) {
        let uiTextList = [];
        let multpleXpath = await this.retrieveElementXpathBasedonIndex(valueListXpath);
        for (let i = 0; i < multpleXpath.length; i++) {
            let UiTextvalue = await this.getUITextUsingJavascript(multpleXpath[i]);
            uiTextList.push(UiTextvalue);
        }
        return uiTextList;
    }
    /**
    * To get ui text values from the dropdown based on string value
    * @param {string} tempValue
    * @param {string} dynValuexpath
    * @return {String[]} uiTextList
    * @author somnath.k
    */
    static async retrieveUITextListBasedonString(tempValue, dynValuexpath) {
        let valueXpath = "";
        if (dynValuexpath.includes("TempValue")) {
            valueXpath = dynValuexpath.replace("TempValue", tempValue);
            if (dynValuexpath.includes("TempValue")) {
                valueXpath = valueXpath.replace("TempValue", tempValue);
            }
        }
        else {
            logger_1.logger.info("value xpath deoesnt contain TempValue keyword");
        }
        let valuetCount = await CommonComponent.grabNumberElements(valueXpath);
        let uiTextList = [];
        for (let i = 1; i <= valuetCount; i++) {
            let tempXpath = valueXpath;
            tempXpath = "(" + tempXpath + ")[" + i + "]";
            if (await CommonComponent.isEnabledByXpath(tempXpath)) {
                let textValue = await z_1.z.grabTextFrom(tempXpath);
                uiTextList.push(textValue);
            }
            else {
                break;
            }
        }
        return uiTextList;
    }
    /**
    * To get element count by passing string value to dynamic xpath
    * @param {string} tempValue
    * @param {string} dynValuexpath
    * @return {number} elementCount
    * @author somnath.k
    */
    static async retrieveElementCountBasedonString(tempValue, dynValuexpath) {
        let elementCount;
        if (dynValuexpath.includes("TempValue")) {
            dynValuexpath = dynValuexpath.replace("TempValue", tempValue);
            if (dynValuexpath.includes("TempValue")) {
                dynValuexpath = dynValuexpath.replace("TempValue", tempValue);
            }
        }
        else {
            logger_1.logger.info("value xpath doesnt contain TempValue keyword");
        }
        elementCount = await this.grabNumberElements(dynValuexpath);
        return elementCount;
    }
    /**
    * To get element xpath list by passing string value to dynamic xpath
    * @param {string} tempValue
    * @param {string} dynValuexpath
    * @return {String[]} uiXpathList
    * @author somnath.k
    */
    static async retrieveElementXpathBasedonString(tempValue, dynValuexpath) {
        let valueXpath = "";
        if (dynValuexpath.includes("TempValue")) {
            valueXpath = dynValuexpath.replace("TempValue", tempValue);
            if (valueXpath.includes("TempValue")) {
                valueXpath = valueXpath.replace("TempValue", tempValue);
            }
        }
        else {
            logger_1.logger.info("value xpath deoesnt contain TempValue keyword");
        }
        let valuetCount = await CommonComponent.grabNumberElements(valueXpath);
        let uiXpathList = [];
        for (let i = 1; i <= valuetCount; i++) {
            let tempXpath = valueXpath;
            tempXpath = "(" + tempXpath + ")[" + i + "]";
            if (await CommonComponent.isEnabledByXpath(tempXpath)) {
                uiXpathList.push(tempXpath);
            }
            else {
                //break;
                continue;
            }
        }
        return uiXpathList;
    }
    /**
    * To get element xpath list based on index
    * @param {string} valuexpath
    * @return {String[]} uiXpathList
    * @author somnath.k
    */
    static async retrieveElementXpathBasedonIndex(valuexpath) {
        let valuetCount = await CommonComponent.grabNumberElements(valuexpath);
        let uiXpathList = [];
        for (let i = 1; i <= valuetCount; i++) {
            let tempXpath = valuexpath;
            tempXpath = "(" + tempXpath + ")[" + i + "]";
            if (await CommonComponent.isEnabledByXpath(tempXpath)) {
                uiXpathList.push(tempXpath);
            }
            else {
                continue;
            }
        }
        return uiXpathList;
    }
    /**
    * To get particular element xpath by passing string value to dynamic xpath
    * @param {string} tempValue
    * @param {string} dynValuexpath
    * @return {String} valueXpath
    * @author somnath.k
    */
    static async retrieveParticularElementXpathBasedonString(tempValue, dynValuexpath) {
        let valueXpath = "";
        if (dynValuexpath.includes("TempValue")) {
            valueXpath = dynValuexpath.replace("TempValue", tempValue);
            if (valueXpath.includes("TempValue")) {
                valueXpath = valueXpath.replace("TempValue", tempValue);
            }
        }
        else {
            logger_1.logger.info("value xpath deoesnt contain TempValue keyword");
        }
        return valueXpath;
    }
    /**
    * To get particular element xpath by passing index value to dynamic xpath
    * @param {string} tempcount
    * @param {string} dynValuexpath
    * @return {String} valueXpath
    * @author somnath.k
    */
    static async retrieveParticularElementXpathBasedonIndexValue(tempcount, dynValuexpath) {
        let valueXpath = "";
        if (dynValuexpath.includes("TempCount")) {
            valueXpath = dynValuexpath.replace("TempCount", tempcount);
            if (valueXpath.includes("TempCount")) {
                valueXpath = valueXpath.replace("TempCount", tempcount);
            }
        }
        else {
            logger_1.logger.info("value xpath deoesnt contain TempCount keyword");
        }
        return valueXpath;
    }
    /**
    * To make the execution to wait until loader xpath disappears
    * @param {string} loaderXpath
    * @author somnath.k
    */
    static async waitUntilAuroraLoaderDisappears(loaderXpath) {
        let count = 0;
        let flag = true;
        while (flag == true) {
            count++;
            if ((await CommonComponent.getHtmlElementData(loaderXpath) != null) || (await CommonComponent.getHtmlElementData(loaderXpath) != undefined)) {
                await z_1.z.wait(2);
            }
            else {
                logger_1.logger.info("Completed wait time");
                flag = false;
            }
            if (count == 200) {
                logger_1.logger.info("Loader waited until 800 seconds,Failed");
                break;
            }
        }
    }
    static async waitForLoadingSymbolNotDisplayed() {
        await z_1.z.waitForInvisible(await AuroraLmt_1.AuroraLmt.getElement(CommonComponentObject_1.CommonComponentObject.LOADING_SPINNER), config_1.prop.CONDITIONAL_WAIT);
        logger_1.logger.info("Waited for Loading Symbol to go off");
    }
    /**
     * Clicks an element using Javascript executor.
     * @param {String} xpath
     * @author om.pawar
     */
    static async clickUsingJsByXpath(xpath) {
        await z_1.z.executeScript(function (xpath) {
            document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
        }, xpath);
    }
    /**
    * To set the attribute of element through javascript dont use
    * @author somnath.k
    */
    static async passvalueUsingJjavasByXpath() {
        await z_1.z.executeScript(function () {
            document.getElementById("fileName").setAttribute('type', 'file');
        });
    }
    /**
    * To check element is readonly or not through javascript
    * @param {string} xpath
    * @return {boolean} element
    * @author somnath.k
    */
    static async verifyFieldisReadonly(xpath) {
        let flag = await z_1.z.executeScript(function (xpath) {
            return document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null).iterateNext().readOnly;
        }, xpath);
        return flag;
    }
    /**
    * To check element is disabled on UI through javascript
    * @param {string} xpath
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyFieldisDisabledOnUI(xpath) {
        let flag = await z_1.z.executeScript(function (xpath) {
            return document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null).iterateNext().disabled;
        }, xpath);
        return flag;
    }
    /**
    * To check element has particular attribute through javascript
    * @param {string} xpath
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyFieldHasParticularAttribute(xpath) {
        let flag = await z_1.z.executeScript(function (xpath) {
            return document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null).iterateNext().hasAttribute("fieldtype");
        }, xpath);
        return flag;
    }
    /**
    * To check element has particular attribute through javascript
    * @param {string} xpath
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyFieldHasParticularStyleAttribute(xpath) {
        let flag = await z_1.z.executeScript(function (xpath) {
            return document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null).iterateNext().hasAttribute("style");
        }, xpath);
        return flag;
    }
    /**
    * To check element is hidden on UI through javascript
    * @param {string} xpath
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyFieldisHidden(xpath) {
        let flag = await z_1.z.executeScript(function (xpath) {
            return document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null).iterateNext().style.visibility == "hidden";
        }, xpath);
        return flag;
    }
    /**
    * To get html tag through javascript
    * @param {string} xpath
    * @return {html tag} flag
    * @author somnath.k
    */
    static async getHtmlElementData(xpath) {
        let flag = await z_1.z.executeScript(function (xpath) {
            return document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null).iterateNext();
        }, xpath);
        return flag;
    }
    /**
    * To check element display is none through javascript
    * @param {string} xpath
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyFieldisDisplayNone(xpath) {
        let flag = await z_1.z.executeScript(function (xpath) {
            return document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null).iterateNext().style.display == "none";
        }, xpath);
        return flag;
    }
    /**
    * To get ui text from normal field through javascript
    * @param {string} xpath
    * @return {string} flag
    * @author somnath.k
    */
    static async getUITextUsingJavascript(xpath) {
        let flag = await z_1.z.executeScript(function (xpath) {
            return document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null).iterateNext().value;
        }, xpath);
        return flag;
    }
    /**
    * To get ui text from dropdown field through javascript
    * @param {string} xpath
    * @return {string} flag
    * @author somnath.k
    */
    static async getDropdownUITextUsingJavascript(xpath) {
        let flag = await z_1.z.executeScript(function (xpath) {
            return document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null).iterateNext().selectedOptions[0].text;
        }, xpath);
        return flag;
    }
    /**
    * To verify checkbox is selected or not
    * @param {string} xpath
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyCheckboxIsSelectedUsingJavascript(xpath) {
        let flag = await z_1.z.executeScript(function (xpath) {
            return document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null).iterateNext().checked;
        }, xpath);
        return flag;
    }
    /**
     * Verifies if element is enabled and returns a boolean value.
     * @param {String} xpath
     * @returns {boolean} boolean
     * @author om.pawar
     */
    static async isEnabledByXpath(xpath) {
        return await z_1.z.executeScript(function (xpath) {
            let flag = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.disabled;
            if (flag) {
                return false;
            }
            else {
                return true;
            }
        }, xpath);
    }
    /**
     * Verifies if element is selected and returns a boolean value.
     * @param {String} xpath
     * @returns {boolean} boolean
     * @author om.pawar
     */
    static async isSelectedByXpath(xpath) {
        return await z_1.z.executeScript(function (xpath) {
            return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.checked;
        }, xpath);
    }
    /**
     * Verifies if element is present in the DOM of a page
     * and instantly returns a boolean value.
     * @param {string} xpath
     * @param {number} timeout
     * @returns {boolean} boolean
     * @author om.pawar
     */
    static async isElementPresent(xpath) {
        return await this.getElementDomStatus(xpath, 1);
    }
    /**
     * Waits for the specified amount of time
     * for the element to load in the DOM of a page
     * and then returns a boolean value.
     * @param {string} xpath
     * @param {number} timeout optional, default timeout is value mentioned against key "DEFAULT_HIGH_WAIT"
     * in config.json
     * @returns {boolean} boolean
     * @author om.pawar
     */
    static async waitForElementPresent(xpath, ...timeout) {
        if (timeout.length === 0) {
            return await this.getElementDomStatus(xpath, config_1.prop.DEFAULT_HIGH_WAIT);
        }
        else {
            return await this.getElementDomStatus(xpath, timeout[0]);
        }
    }
    /**
     * Verifies if element is present in the DOM of a page
     * and visible and instantly returns a boolean value.
     * @param {string} xpath
     * @param {number} timeout
     * @returns {boolean} boolean
     * @author om.pawar
     */
    static async isElementVisible(xpath) {
        return await this.getElementViewportStatus(xpath, 1);
    }
    /**
     * Waits for the specified amount of time
     * for the element to load in the DOM of a page and to be visible
     * and then returns a boolean value.
     * @param {string} xpath
     * @param {number} timeout optional, default timeout is value mentioned against key "DEFAULT_HIGH_WAIT"
     * in config.json
     * @returns {boolean} boolean
     * @author om.pawar
     */
    static async waitForElementVisible(xpath, ...timeout) {
        if (timeout.length == 0) {
            logger_1.logger.info("&&& default high wait applied &&&");
            return await this.getElementViewportStatus(xpath, config_1.prop.DEFAULT_HIGH_WAIT);
        }
        else {
            logger_1.logger.info("$$$$ dyanamic wait applied --> " + timeout);
            return await this.getElementViewportStatus(xpath, timeout[0]);
        }
    }
    /**
     * Fetches column Value on any listing page by specified columnName
     * @param {String} columnName
     * @returns {String} columnValue
     * @author priyanka.ingale
     */
    static async getValueForColumnName(columnName) {
        let columnIndex = await (await this.getColumnIndexOnListingPage(columnName)).toString();
        let columnHeaderXpath = await await AuroraLmt_1.AuroraLmt.getElement(CommonComponentObject_1.CommonComponentObject.ALL_COLUMN_HEADER_TEXT);
        columnHeaderXpath = "((" + columnHeaderXpath + "/..)[" + columnIndex + "]//dew-row[contains(@class,'list-body')]//span)[1]";
        logger_1.logger.info("Xpath for retrieving column value --> " + columnHeaderXpath);
        await z_1.z.waitForVisible(columnHeaderXpath);
        await z_1.z.scrollIntoView(columnHeaderXpath);
        let columnValue = await z_1.z.grabTextFrom(columnHeaderXpath);
        logger_1.logger.info("Retrieved value for column " + columnName + " is --> " + columnValue);
        return columnValue;
    }
    static async getColumnIndexOnListingPage(columnName) {
        let columnIndex = 0;
        let columnHeaderXpath = await AuroraLmt_1.AuroraLmt.getElement(CommonComponentObject_1.CommonComponentObject.ALL_COLUMN_HEADER_TEXT) + "//span[contains(@class,'text-subhead-b')]";
        let noOfHeaders = await z_1.z.grabNumberOfVisibleElements(await AuroraLmt_1.AuroraLmt.getElement(CommonComponentObject_1.CommonComponentObject.ALL_COLUMN_HEADER_TEXT));
        if (noOfHeaders > 0) {
            for (let i = 1; i <= noOfHeaders; i++) {
                let columnXpath = "(" + columnHeaderXpath + ")[" + i + "]";
                let columnNameRetrive = await z_1.z.grabTextFrom(columnXpath);
                logger_1.logger.info("Column Name retrive is ---> " + columnNameRetrive);
                if (columnNameRetrive.toUpperCase() === columnName.toUpperCase()) {
                    columnIndex = i;
                    logger_1.logger.info("Column Index is---> " + columnIndex);
                    break;
                }
            }
        }
        else {
            throw new Error("Column Headers not found");
        }
        return columnIndex;
    }
    static async selectToday(locator) {
        await z_1.z.waitForVisible(locator);
        await z_1.z.click(locator);
        await z_1.z.waitForVisible(".currentDate");
        await z_1.z.click(".currentDate", ".d-picker");
    }
    static async selectInNextMonth(locator, date) {
        await z_1.z.waitForVisible(locator);
        await z_1.z.click(locator);
        await z_1.z.click("show next month", ".d-picker");
        await z_1.z.click(date, ".d-picker");
    }
    static async getValueForColumnNameOfReq(columnName) {
        let columnIndex = (await this.getColumnIndexOnListingPage(columnName)).toString();
        let columnHeaderXpath = await AuroraLmt_1.AuroraLmt.getElement(CommonComponentObject_1.CommonComponentObject.ALL_COLUMN_HEADER_TEXT);
        columnHeaderXpath = "(((" + columnHeaderXpath + "/..)[" + columnIndex + "]//dew-row[contains(@class,'list-body')])//dew-col)[1]";
        logger_1.logger.info("Xpath for retrieving column value --> " + columnHeaderXpath);
        await z_1.z.scrollIntoView(columnHeaderXpath);
        let columnValue = await z_1.z.grabTextFrom(columnHeaderXpath);
        logger_1.logger.info("Retrieved value for column " + columnName + " is --> " + columnValue);
        return columnValue;
    }
    static async clickOnCreateRequestButton() {
        await z_1.z.waitForVisible(`//span[contains(text(),'${await AuroraLmt_1.AuroraLmt.getLabel("CREATE_REQUEST_BUTTON")}')]`);
        // await Z.createRequestForNonCatalogItem();
        logger_1.logger.info(`Clicked on Create Request button`);
    }
    /**
     * grab number of elements present in DOM.
     * @param {String} xpath
     * @returns {number} noOfElements
     * @author priyanka.ingale
     */
    static async grabNumberElements(xpath) {
        return await z_1.z.executeScript(function (xpath) {
            let noOfElements = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength;
            return noOfElements;
        }, xpath);
    }
    static async navigateTo(productName) {
        await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(CommonComponentObject_1.CommonComponentObject.HAMBURGER_MENU));
        logger_1.logger.info("Clicked on Hamburger Menu");
        await z_1.z.waitForVisible(await AuroraLmt_1.AuroraLmt.getElement(CommonComponentObject_1.CommonComponentObject.MENU_PANEL));
        await z_1.z.seeElement(await AuroraLmt_1.AuroraLmt.getElement(CommonComponentObject_1.CommonComponentObject.MENU_PANEL));
        logger_1.logger.info("I can see Menu Panel");
        let applicationXpath = "//dew-side-menu//ul//li[@title='" + productName + "']";
        await z_1.z.waitForVisible(applicationXpath);
        await z_1.z.click(applicationXpath);
        logger_1.logger.info("Clicked on Application-----> " + productName);
        await this.waitForLoadingSymbolNotDisplayed();
    }
    /**
    * To generate random number
    * @param {number} length
    * @return {number} random number
    * @author somnath.k
    */
    static async getRandomNumber(length) {
        if (length !== undefined) {
            return Math.floor(Math.random() * Math.floor(length));
        }
        else {
            logger_1.logger.info("Invalid length so unable to generate randon number " + length);
        }
    }
    // /**
    //  * Wait loader until loader image disappears
    //  * @param {String} loaderXpath
    //  * @param {number} waittime
    //  *
    //  * @author somnath.k
    //  */
    // static async waitUntilLoaderImgDisappears(loaderXpath: String, approximateTime: number) {
    //     let count = 0;
    //     while (true) {
    //         if (count === approximateTime) {
    //             break;
    //         }
    //         if (this.isElementPresent(loaderXpath as string)) {
    //             break;
    //         } else {
    //             await z.wait(2);
    //         }
    //         count++;
    //     }
    // }
    /**
    * To generate random string
    * @param {number} length
    * @return {string} result
    * @author somnath.k
    */
    static async randomString(length) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    /**
    * To generate random string
    * @param {number} length
    * @return {string} random number
    * @author somnath.k
    */
    static async randomNumberString(length) {
        let result = '';
        let characters = '0123456789';
        let charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    /**
     * To get element count based on particular html tag
     * @param {String} rowsXpath
     * @param {number} waittime
     * @return row count
     * @author somnath.k
     */
    static async getRowCount(rowsRecXpath) {
        let rowCount = 1;
        rowsRecXpath = rowsRecXpath + '[TempCount]';
        let actualVal = rowsRecXpath;
        while (true) {
            let passValue = actualVal.replace("TempCount", String(rowCount));
            if (await this.isElementPresent(passValue)) {
                rowCount = rowCount + 1;
            }
            else {
                break;
            }
        }
        return rowCount - 1;
    }
    /**
     * To upload document
     * @param {String} browseFileXpath
     * @param {String} uploadType
     * @param {String} filePath
     * @return {String} fileUploaded
     * @author somnath.k
     */
    static async uploadDocument(browseFileXpath, uploadType, filePath) {
        let fileUploaded = "";
        let filePathDivision = filePath.split("/");
        fileUploaded = filePathDivision[filePathDivision.length - 1].trim();
        logger_1.logger.info("File uploaded in the system" + fileUploaded);
        if (uploadType === "SINGLE") {
            await z_1.z.attachFile(browseFileXpath, filePath.trim());
        }
        else {
        }
        return fileUploaded;
    }
    /**
     * To upload document based on random selection
     * @param {String} filePath
     * @param {String} browseFileXpath
     * @return {String} fileUploaded
     * @author somnath.k
     */
    static async uploadRandomDocument(filePath, browseFileXpath) {
        let fileUploaded = "";
        if (filePath !== undefined) {
            let filePathList = filePath.split("|");
            let count = Math.floor(Math.random() * Math.floor(filePathList.length - 1));
            let randomFile = filePathList[count];
            let filePathDivision = randomFile.split("/");
            fileUploaded = filePathDivision[filePathDivision.length - 1].trim();
            logger_1.logger.info("File uploaded in the system" + fileUploaded);
            await z_1.z.attachFile(browseFileXpath, randomFile.trim());
        }
        else {
            logger_1.logger.info("Invalid file path " + filePath);
        }
        return fileUploaded;
    }
    /**
     * To upload multiple documents
     * @param {String} filePath
     * @param {String} browseFileXpath
     * @param {String} loaderXpath
     * @return {String} fileUploaded
     * @author somnath.k
     */
    static async uploadMultipleDocuments(filePath, browseFileXpath, loaderXpath) {
        let fileUploaded = [];
        if (filePath !== undefined) {
            let filePathList = filePath.split("|");
            for (let singleFilePath of filePathList) {
                let filePathDivision = singleFilePath.split("/");
                fileUploaded.push(filePathDivision[filePathDivision.length - 1].trim());
                logger_1.logger.info("File uploaded in the system" + fileUploaded);
                await z_1.z.attachFile(browseFileXpath, singleFilePath.trim());
                await this.waitUntilAuroraLoaderDisappears(loaderXpath);
            }
        }
        else {
            logger_1.logger.info("Invalid file path " + filePath);
        }
        return fileUploaded;
    }
    /**
     * To replace document
     * @param {String} replaceXpath
     * @param {String} filePath
     * @return {String} fileUploaded
     * @author somnath.k
     */
    static async replaceDocument(replaceXpath, filePath) {
        let fileUploaded = "";
        if (filePath !== undefined) {
            let filePathDivision = filePath.split("/");
            fileUploaded = filePathDivision[filePathDivision.length - 1].trim();
            logger_1.logger.info("File uploaded in the system" + fileUploaded);
            await z_1.z.scrollIntoView(replaceXpath);
            await z_1.z.attachFile(replaceXpath, filePath);
        }
        else {
            logger_1.logger.info("Invalid file path " + filePath);
        }
        return fileUploaded;
    }
    /**
     * To replace document based on random file selection
     * @param {String} replaceXpath
     * @param {String} filePath
     * @return {String} fileUploaded
     * @author somnath.k
     */
    static async replaceRandomDocument(replaceXpath, filePath) {
        let fileUploaded = "";
        if (filePath !== undefined) {
            let filePathList = filePath.split("|");
            let count = Math.floor(Math.random() * Math.floor(filePathList.length - 1));
            let randomFile = filePathList[count];
            let filePathDivision = randomFile.split("/");
            fileUploaded = filePathDivision[filePathDivision.length - 1].trim();
            logger_1.logger.info("File uploaded in the system" + fileUploaded);
            await z_1.z.attachFile(replaceXpath, randomFile.trim());
        }
        else {
            logger_1.logger.info("Invalid file path " + filePath);
        }
        return fileUploaded;
    }
    /**
     * To select random date in current range in aurora setup based on combined MM/DD/YY[Angular Date]
     * @param {string} comobinedDayMonthYearXpath
     * @param {string} currentRangeYearMonthDayOptionListXpath
     * @author somnath.k
     */
    static async auroraRandomCombinedDateSelectionBasedonClick(comobinedDayMonthYearXpath, currentRangeYearMonthDayOptionListXpath) {
        await z_1.z.click(comobinedDayMonthYearXpath);
        //below code is to select all the value like MM YY DD
        await this.clickRandomValueFromList(currentRangeYearMonthDayOptionListXpath);
        await this.clickRandomValueFromList(currentRangeYearMonthDayOptionListXpath);
        await this.clickRandomValueFromList(currentRangeYearMonthDayOptionListXpath);
    }
    /**
     * To click random date in current range in the aurora setup based on separate MM,DD and YY[Angular Date]
     * @param {string} comobinedDayMonthYearXpath
     * @param {string} currentRangeYearOptionListXpath
     * @param {string} monthOptionListXpath
     * @param {string} dayOptionListXpath
     * @author somnath.k
     */
    static async auroraRandomDateSelectionBasedonClick(comobinedDayMonthYearXpath, currentRangeYearOptionListXpath, monthOptionListXpath, dayOptionListXpath) {
        await z_1.z.click(comobinedDayMonthYearXpath);
        await this.clickRandomValueFromList(currentRangeYearOptionListXpath);
        await this.clickRandomValueFromList(monthOptionListXpath);
        await this.clickRandomValueFromList(dayOptionListXpath);
    }
    /**
    * To generate random date format based on select built in[jsp Date]
    * @author somnath.k
    */
    static async dateGeneratorBasedonSelect(monthDropdownXpath, monthOptionListXpath, yearDropdownXpath, yearOptionListXpath, dayOptionListXpath) {
        await this.monthSelectBasedonSelect(monthDropdownXpath, monthOptionListXpath);
        await this.yearSelectBasedonSelect(yearDropdownXpath, yearOptionListXpath);
        await this.daySelect(dayOptionListXpath);
    }
    /**
    * To generate random date format based on click method[jsp Date]
    * @author somnath.k
    */
    static async dateGeneratorBasedonClick(monthDropdownXpath, monthOptionListXpath, yearDropdownXpath, yearOptionListXpath, dayOptionListXpath) {
        await this.monthSelectBasedOnClick(monthDropdownXpath, monthOptionListXpath);
        await this.yearSelectBasedonClick(yearDropdownXpath, yearOptionListXpath);
        await this.daySelect(dayOptionListXpath);
    }
    /**
    * To select random month based select built in method[jsp date]
    * @author somnath.k
    */
    static async monthSelectBasedonSelect(monthDropdownXpath, monthOptionListXpath) {
        try {
            await this.selectRandomValueFromDropdownBasedonOptionXpath(monthDropdownXpath, monthOptionListXpath);
        }
        catch (error) {
            logger_1.logger.info("Failed to select random month");
        }
    }
    /**
    * To select random month based on click method[jsp date]
    * @author somnath.k
    */
    static async monthSelectBasedOnClick(monthDropdownXpath, monthOptionListXpath) {
        try {
            await this.clickRandomValueFromDropdownBasedonOptionXpath(monthDropdownXpath, monthOptionListXpath);
        }
        catch (error) {
            logger_1.logger.info("Failed to select random month");
        }
    }
    /**
    * To select random year[jsp date]
    * @param {string} fieldId
    * @author somnath.k
    */
    static async yearSelectBasedonSelect(yearDropdownXpath, yearOptionListXpath) {
        try {
            await this.selectRandomValueFromDropdownBasedonOptionXpath(yearDropdownXpath, yearOptionListXpath);
        }
        catch (error) {
            logger_1.logger.info("Failed to select random year");
        }
    }
    /**
    * To select random year[jsp date]
    * @param {string} fieldId
    * @author somnath.k
    */
    static async yearSelectBasedonClick(yearDropdownXpath, yearOptionListXpath) {
        try {
            await this.clickRandomValueFromDropdownBasedonOptionXpath(yearDropdownXpath, yearOptionListXpath);
        }
        catch (error) {
            logger_1.logger.info("Failed to select random year");
        }
    }
    /**
    * To select random day[jsp date]
    * @author somnath.k
    */
    static async daySelect(dayOptionListXpath) {
        await this.clickRandomValueFromList(dayOptionListXpath);
    }
    /**
    * To get element count based on particular html tag
    *
    * @param {any} variableName
    * @return {boolean} flag
    * @author Sowmyashree R V
    */
    static async isANumber(variableName) {
        let flag = false;
        if (Number.isFinite(variableName)) {
            flag = true;
        }
        return flag;
    }
    /**
    * To get the current date
    *
    * @return {string}currentDate
    * @author Sowmyashree R V
    */
    static async getCurrentDate() {
        let today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        let currentDate = dd + '/' + mm + '/' + yyyy;
        return currentDate;
    }
    /**
     * To search and select random value from dropdown by passing firstvalue xpath from the list
     * @param {string} dropdownXpath
     * @param {string} optionListxpath
     * @param {string} firstListXpath
     * @param {string} searchBoxXpath
     * @author somnath.k
     */
    static async searchAndSelectRandomValueFromDropdown(dropdownXpath, optionListxpath, firstListXpath, searchBoxXpath) {
        await z_1.z.waitForElement(dropdownXpath);
        await z_1.z.click(dropdownXpath);
        let optionXpathList = await this.retrieveElementXpathBasedonIndex(optionListxpath);
        let optionlistCount = optionXpathList.length;
        let randomCount = await this.getRandomNumber(optionlistCount);
        let tempXpath;
        if (randomCount == 0 || randomCount == 1) {
            randomCount = 2;
        }
        let randomText = await z_1.z.grabTextFrom(optionXpathList[randomCount]);
        await z_1.z.fillField(searchBoxXpath, randomText);
        await z_1.z.click(firstListXpath);
    }
    /**
    * To string list using separator like / or | etc
    * @param {string} separator
    * @param {string} stringValue
    * @return {string[]} valueList
    * @author somnath.k
    */
    static async getListFromString(separator, stringValue) {
        let valueList = stringValue.split(separator);
        return valueList;
    }
    /**
    * To sort arraylist in ascending order
    * @param {any} sortedArray
    * @return {any} sorted
    * @author somnath.k
    */
    static async getAscendingSortedArray(sortedArray) {
        const sorted = sortedArray.sort((a, b) => {
            return a.localeCompare(b, undefined, {
                numeric: true,
                sensitivity: 'base'
            });
        });
        console.log("inside method");
        return sorted;
    }
    /**
    * To sort arraylist in descending order
    * @param {any} sortedArray
    * @return {any} sorted
    * @author somnath.k
    */
    static async getDescendingSortedArray(sortedArray) {
        const sorted = sortedArray.sort((a, b) => {
            return a.localeCompare(b, undefined, {
                numeric: true,
                sensitivity: 'base'
            });
        });
        return sorted.reverse();
    }
    /**
    * To get particular table column all data
    * @param {string} valueListXpath
    * @param {string} currentPageCountXpath
    * @param {string} lastPageCountXpath
    * @param {string} nextPageIconXpath
    * @param {string} loaderXpath
    * @return {string[]} particularColumnData
    * @author somnath.k
    */
    static async getParticularTableColumnAllData(valueListXpath, currentPageCountXpath, lastPageCountXpath, nextPageIconXpath, loaderXpath) {
        let flag = true;
        let particularColumnData = [];
        let count = 0;
        await CommonComponent.waitUntilAuroraLoaderDisappears(loaderXpath);
        while (flag == true) {
            let currentPageCount = await z_1.z.grabTextFrom(currentPageCountXpath);
            let lastPageCount = await z_1.z.grabTextFrom(lastPageCountXpath);
            if ((currentPageCount != null || currentPageCount != "") && (lastPageCount != null || lastPageCount != "")) {
                flag = false;
                logger_1.logger.info("Issue with current and last page xpath");
            }
            else {
                if ((currentPageCount == lastPageCount) && (count == 0)) {
                    let tempData = await CommonComponent.retrieveUITextListBasedonIndexWithSingleXpath(valueListXpath);
                    particularColumnData = particularColumnData.concat(tempData);
                    flag = false;
                }
                else if ((currentPageCount == lastPageCount) && (count != 0)) {
                    let tempData = await CommonComponent.retrieveUITextListBasedonIndexWithSingleXpath(valueListXpath);
                    particularColumnData = particularColumnData.concat(tempData);
                    flag = false;
                }
                else {
                    let tempData = await CommonComponent.retrieveUITextListBasedonIndexWithSingleXpath(valueListXpath);
                    particularColumnData = particularColumnData.concat(tempData);
                    await z_1.z.click(nextPageIconXpath);
                    await CommonComponent.waitUntilAuroraLoaderDisappears(loaderXpath);
                }
            }
            count++;
        }
        return particularColumnData;
    }
    /**
    * To get particular table column all data
    * @param {string[]} uiValueList
    * @param {string[]} internalSortedList
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyUIArrayandSortedArray(uiValueList, internalSortedList) {
        let flag = false;
        for (let i = 0; i < internalSortedList.length; i++) {
            if (uiValueList[i] == internalSortedList[i]) {
                flag = true;
            }
            if (flag == false) {
                break;
            }
        }
        return flag;
    }
    /**
     * To generate random no of email ids
     * @param {number} emailCharacterLength
     * @param {number} totalEmailCount
     * @return {string[]} particularColumnData
     * @author somnath.k
     */
    static async generateRandomNoofEmailId(emailCharacterLength, totalEmailCount) {
        let randomTotalCount = await this.getRandomNumber(totalEmailCount);
        if (randomTotalCount == 0) {
            randomTotalCount = randomTotalCount + 1;
        }
        let emailIDList = [];
        for (let i = 0; i < randomTotalCount; i++) {
            let randomEmailName = await this.randomString(emailCharacterLength);
            let randomCompanyName = await this.randomString(6);
            let randomDomainName = await this.randomString(4);
            emailIDList.push(randomEmailName + "@" + randomCompanyName + "." + randomDomainName);
        }
        return emailIDList;
    }
    /**
     * To generate specific mail id
     * @param {number} emailCharacterLength
     * @param {number} totalEmailCount
     * @return {string[]} emailIDList
     * @author somnath.k
     */
    static async generateSpecifiedNoofEmailId(emailCharacterLength, totalEmailCount) {
        let emailIDList = [];
        for (let i = 0; i < totalEmailCount; i++) {
            let randomEmailName = await this.randomString(emailCharacterLength);
            emailIDList.push(randomEmailName + "@ultria.com");
        }
        return emailIDList;
    }
    /**
     * To generate duplicate email id
     * @param {number} emailCharacterLength
     * @param {number} totalEmailCount
     * @return {string[]} emailIDList
     * @author somnath.k
     */
    static async generateDuplicateNoofEmailId(emailCharacterLength, totalEmailCount) {
        let randomEmailName = await this.randomString(emailCharacterLength);
        let singleEmailID = randomEmailName + "@ultria.com";
        let emailIDList = [];
        for (let i = 0; i < totalEmailCount; i++) {
            emailIDList.push(singleEmailID);
        }
        return emailIDList;
    }
    /**
     * To generate invalid email id
     * @param {number} emailCharacterLength
     * @param {number} totalEmailCount
     * @return {string[]} emailIDList
     * @author somnath.k
     */
    static async generateRandomNoofInvalidEmailId(emailCharacterLength, totalEmailCount) {
        let emailIDList = [];
        for (let i = 0; i < totalEmailCount; i++) {
            let randomEmailName = await this.randomString(emailCharacterLength);
            let randomCompanyName = await this.randomString(6);
            let randomDomainName = await this.randomString(4);
            emailIDList.push(randomEmailName + randomCompanyName + "." + randomDomainName);
        }
        return emailIDList;
    }
    /**
     * To get ui color
     * @param {number} emailCharacterLength
     * @param {number} totalEmailCount
     * @return {string[]} emailIDList
     * @author somnath.k
     */
    static async getUIColor(elementXpath, propertyName) {
        let colorValue = await I.grabCssPropertyFrom(elementXpath, propertyName);
        return colorValue;
    }
    /**
     * To specified color from UI
     * @param {number} elementXpath
     * @param {number} propertyName
     * @param {number} propertyValue
     * @return {boolean} flag
     * @author somnath.k
     */
    static async verifySpecifiedColorPresentonUI(elementXpath, propertyName, propertyValue) {
        let flag = false;
        let elementListXpath = await this.retrieveElementXpathBasedonIndex(elementXpath);
        for (let element of elementListXpath) {
            // let colorValue=await I.grabCssPropertyFrom(element as string,propertyName);
            let colorValue = await this.getUIColor(element, propertyName);
            logger_1.logger.info("color of background", colorValue);
            flag = colorValue.includes(propertyValue);
            if (flag == false) {
                break;
            }
        }
        return flag;
    }
    /**
    * To fill entire aurora contract details information
    * @param {string} headerListXpath
    * @param {string} dnyParticularHeaderXpath
    * @param {string} dynamicMetadataXpath
    * @param {boolean} fillOnlyMandatoryFlag //flag to fill only mandatory fields
    * @param {boolean} clearFieldFlag   //to clear field on UI
    * @param {boolean} dbTestDataFlag //flag to pass value from test data table
    * @param {string} dbTestData  //to pass value from test data table
    * @param {boolean} onlySpecificTypeFlag
    * @param {string} userType
    * @author somnath.k
    */
    static async fillOverlayeDetails(headerListXpath, dnyParticularHeaderXpath, dynamicMetadataXpath, fillOnlyMandatoryFlag, clearFieldFlag, dbTestDataFlag, dbTestData, onlySpecificTypeFlag, userType) {
        logger_1.logger.info("In process of filling Contract Detail page ");
        try {
            let headerList = await CommonComponent.retrieveUITextListBasedonIndexWithSingleXpath(headerListXpath);
            let headerXpathList = await CommonComponent.retrieveElementXpathBasedonIndex(headerListXpath);
            logger_1.logger.info("Number of Headers : " + headerList.length);
            if (GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue.size > 0) {
                GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue.clear();
                logger_1.logger.info("Removed previous contract details data from map");
            }
            if (GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandBlankValue.size > 0) {
                GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandBlankValue.clear();
                logger_1.logger.info("Removed previous contract details data from blank map");
            }
            for (let i = 0; i < headerList.length; i++) {
                logger_1.logger.info("Header number " + (i + 1) + " : " + headerList[i]);
                let headerName = headerList[i];
                if (headerName.includes("CP")) {
                    continue;
                }
                // commented below code bcoz Contract header is removed inside the form
                let particularHeader = await CommonComponent.retrieveParticularElementXpathBasedonString(headerName, dnyParticularHeaderXpath);
                await z_1.z.click(headerXpathList[i]);
                await z_1.z.scrollIntoView(particularHeader);
                for (let j = 0; j < headerList.length; j++) {
                    let headerNameText = headerXpathList[j];
                    if (headerNameText.includes("*")) {
                        headerNameText = headerNameText.replace("*", "");
                    }
                    logger_1.logger.info("Header number " + (j + 1) + " : " + headerNameText);
                    try {
                        /**
                         * Input contract meta field values
                         */
                        await this.fillHeaderFields(dynamicMetadataXpath, headerName, fillOnlyMandatoryFlag, clearFieldFlag, dbTestDataFlag, dbTestData, onlySpecificTypeFlag, userType);
                    }
                    catch (error) {
                        logger_1.logger.info("No Fields identified under - " + headerName);
                    }
                }
            }
        }
        catch (error) {
            logger_1.logger.info("Failed to fill all the fields in the contract details page");
        }
    }
    /**
    * To fill/clear only mandatory/all subheader level fields details
    * @param {string} dynamicMetadataXpath
    * @param {string} headerValue
    * @param {boolean} fillOnlyMandatoryFlag //flag to fill only mandatory fields
    * @param {boolean} clearFieldFlag   //to clear field on UI
    * @param {boolean} dbTestDataFlag //flag to pass value from test data table
    * @param {string} dbTestData   //to pass value from test data table
    * @param {boolean} onlySpecificTypeFlag
    * @param {string} userType
    * @author somnath.k
    */
    static async fillHeaderFields(dynamicMetadataXpath, headerValue, fillOnlyMandatoryFlag, clearFieldFlag, dbTestDataFlag, dbTestData, onlySpecificTypeFlag, userType) {
        let metadataInputCount = await CommonComponent.retrieveElementXpathBasedonString(headerValue + " ", dynamicMetadataXpath);
        logger_1.logger.info("Number of Fields : " + metadataInputCount.length);
        for (let k = 0; k < metadataInputCount.length; k++) {
            let fieldId = await z_1.z.grabAttributeFrom(metadataInputCount[k], "name");
            let fieldType = await z_1.z.grabAttributeFrom(metadataInputCount[k], "fieldtype");
            fieldType = fieldType + "";
            fieldType = fieldType.toLowerCase();
            if (fieldId == "status") {
                continue;
            }
            let metadataPresentonUI = await CommonComponent.isEnabledByXpath(metadataInputCount[k]);
            let metadataDisabled = (await CommonComponent.verifyFieldisDisabledOnUI(metadataInputCount[k]));
            let metadataHidden = (await CommonComponent.verifyFieldisHidden(metadataInputCount[k]));
            if ((metadataPresentonUI == true && (metadataDisabled != true || metadataDisabled == null || metadataDisabled == undefined) && metadataHidden != true)) {
                if (await CommonComponent.verifyFieldHasParticularAttribute(metadataInputCount[k]) == true) {
                    let fieldValue = "";
                    try {
                        let labelXpath = metadataInputCount[k] + "//ancestor::*/div[@for]";
                        let metadataLabel = await z_1.z.grabTextFrom(labelXpath);
                        let value;
                        if (fillOnlyMandatoryFlag) {
                            if (metadataLabel.includes("*")) {
                                logger_1.logger.info("********************In side fill only mandatory***********************");
                                value = await this.addValues(fieldValue, metadataInputCount[k], fieldType, clearFieldFlag, dbTestDataFlag, dbTestData);
                            }
                            else {
                                continue;
                            }
                        }
                        else if (onlySpecificTypeFlag) {
                            if (fieldType != userType) {
                                continue;
                            }
                            value = await this.addValues(fieldValue, metadataInputCount[k], fieldType, clearFieldFlag, dbTestDataFlag, dbTestData);
                        }
                        else {
                            value = await this.addValues(fieldValue, metadataInputCount[k], fieldType, clearFieldFlag, dbTestDataFlag, dbTestData);
                        }
                        metadataLabel = metadataLabel.replace("*", "").trim();
                        if (value.length == 0 || value == "" || value == null || value == undefined) {
                            let mapfieldValues = new Map();
                            mapfieldValues.set(metadataLabel, value);
                            GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandBlankValue.set(headerValue + "_" + k, mapfieldValues);
                        }
                        else {
                            let mapfieldValues = new Map();
                            mapfieldValues.set(metadataLabel, value);
                            GlobalVariables_1.GlobalVariables.subHeaderWithmetadataandValue.set(headerValue + "_" + k, mapfieldValues);
                        }
                    }
                    catch (error) {
                        logger_1.logger.info("Field is either Hidden or disabled. Kindly refer screenshot");
                    }
                }
                else {
                    logger_1.logger.info("Metadata is not having fieldtype attribute,skipped");
                }
            }
            else {
                logger_1.logger.info("Metadata is not available in the overlay,skipped");
            }
        }
    }
    /**
    * To add random value/test data table value/clear to all type of fields
    * @param {string} fieldValue
    * @param {string} metadataInputCount
    * @param {string} fieldType
    * @param {boolean} clearFlag   //to clear field on UI
    * @param {boolean} dbTestDataFlag //flag to pass value from test data table
    * @param {string} dbTestData  //to pass value from test data table
    * @return {string} fieldValue
    * @author somnath.k
    */
    static async addValues(fieldValue, metadataInputCount, fieldType, clearFlag, dbTestDataFlag, dbTestData) {
        let fieldVal = "";
        //let fieldType = await z.grabAttributeFrom(metadataInputCount, "fieldtype");
        let fieldId = await z_1.z.grabAttributeFrom(metadataInputCount, "name");
        logger_1.logger.info("***************************Field id value******************", fieldId);
        let fieldTypeVal = fieldType + "";
        logger_1.logger.info("***************************Field id value******************", fieldTypeVal.toLowerCase());
        // if (fieldType == "DROPDOWN" || fieldType == "MANY_TO_MANY") {
        if (fieldTypeVal.toLowerCase() == "dropdown") {
            let index;
            let classValue = "" + await z_1.z.grabAttributeFrom(metadataInputCount, "class");
            let classValueList = classValue.split(" ");
            if (classValueList.includes("ng-select-disabled")) {
                logger_1.logger.info("Dropdown field is disabled on UI so cannot be filled,skipped");
            }
            else {
                try {
                    let dropdownXpath = metadataInputCount;
                    await z_1.z.scrollIntoView(dropdownXpath);
                    if (clearFlag == true) {
                        let dropdownClearIcon = dropdownXpath + "//span[@title='Clear all']";
                        logger_1.logger.info("dynamic doprdown clear icon", dropdownClearIcon);
                        if ((await CommonComponent.getHtmlElementData(dropdownClearIcon) != null) || (await CommonComponent.getHtmlElementData(dropdownClearIcon) != undefined)) {
                            await z_1.z.click(dropdownClearIcon);
                        }
                        else {
                            logger_1.logger.info("Dropdown doesnt have any value in the  and the xpath is", dropdownClearIcon);
                        }
                    }
                    else {
                        if (fieldId == "status") {
                            let fieldListVal = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMON_DROPDOWN_LIST);
                            let dropdownSearchBox = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMON_DROPDOWN_SEARCH_BOX);
                            //passing value as inactive and will be handled later
                            let dropdownVal = "Inactive";
                            await CommonComponent.searchValueAndSelectinDropdownByClick(dropdownXpath, fieldListVal, dropdownSearchBox, dropdownVal);
                        }
                        else if (fieldId == "AUTO_RENEW") {
                            let fieldListVal = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMON_DROPDOWN_LIST);
                            let dropdownSearchBox = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMON_DROPDOWN_SEARCH_BOX);
                            //passing value as inactive and will be handled later
                            let dropdownVal = "Single Term";
                            await CommonComponent.searchValueAndSelectinDropdownByClick(dropdownXpath, fieldListVal, dropdownSearchBox, dropdownVal);
                        }
                        else {
                            let fieldListVal = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMON_DROPDOWN_LIST);
                            let dropdownSearchBox = await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMMON_DROPDOWN_SEARCH_BOX);
                            await CommonComponent.searchRandomValueAndSelectinDropdownByClick(dropdownXpath, fieldListVal, dropdownSearchBox);
                        }
                    }
                    await z_1.z.waitForVisible(dropdownXpath);
                    fieldValue = await z_1.z.grabTextFrom(dropdownXpath);
                    logger_1.logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
                }
                catch (error) {
                    logger_1.logger.info("Failed while filling the dropdown value or dropdown is disabled on UI,skipped");
                }
            }
        }
        else if (fieldTypeVal.toLowerCase() == "string") {
            try {
                let stringXpath = metadataInputCount;
                if (await CommonComponent.verifyFieldisReadonly(stringXpath) == true) {
                    logger_1.logger.info("Metadata is disabled on UI so value cannot be filled,Skipped");
                    fieldValue = "";
                }
                else {
                    await z_1.z.scrollIntoView(stringXpath);
                    if (clearFlag == true) {
                        await z_1.z.clearField(stringXpath);
                    }
                    else {
                        if (dbTestDataFlag == true) {
                            fieldVal = dbTestData;
                        }
                        else {
                            fieldVal = await CommonComponent.randomString(16);
                        }
                        if (fieldId == "Contract_Title") {
                            await z_1.z.fillField(stringXpath, "Automation" + await CommonComponent.getRandomNumber(1000000));
                        }
                        else {
                            if (fieldId == "Contract_Term") {
                                await z_1.z.fillField(stringXpath, "" + await CommonComponent.getRandomNumber(10));
                            }
                            else {
                                await z_1.z.fillField(stringXpath, fieldVal);
                            }
                        }
                    }
                    await z_1.z.waitForVisible(stringXpath);
                    fieldValue = await CommonComponent.getUITextUsingJavascript(stringXpath);
                    logger_1.logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
                }
            }
            catch (error) {
                logger_1.logger.info("Failed while filling the string value");
            }
        }
        else if (fieldTypeVal.toLowerCase() == "decimal") {
            try {
                let decimalXpath = metadataInputCount;
                if (await CommonComponent.verifyFieldisReadonly(decimalXpath) == true) {
                    logger_1.logger.info("Metadata is disabled on UI so value cannot be filled,Skipped");
                    fieldValue = "";
                }
                else {
                    await z_1.z.scrollIntoView(decimalXpath);
                    if (clearFlag == true) {
                        await z_1.z.clearField(decimalXpath);
                    }
                    else {
                        if (dbTestDataFlag == true) {
                            fieldVal = dbTestData;
                        }
                        else {
                            fieldVal = await CommonComponent.getRandomNumber(10) + ".00";
                        }
                        await z_1.z.fillField(decimalXpath, fieldVal);
                    }
                }
                await z_1.z.waitForVisible(decimalXpath);
                fieldValue = await CommonComponent.getUITextUsingJavascript(decimalXpath);
                logger_1.logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
            }
            catch (error) {
                logger_1.logger.info("Failed while filling the decimal value");
            }
        }
        else if (fieldTypeVal.toLowerCase() == "integer" || fieldTypeVal.toLowerCase() == "number") {
            try {
                let integerXpath = metadataInputCount;
                if (await CommonComponent.verifyFieldisReadonly(integerXpath) == true) {
                    logger_1.logger.info("Metadata is disabled on UI so value cannot be filled,Skipped");
                    fieldValue = "";
                }
                else {
                    await z_1.z.scrollIntoView(integerXpath);
                    if (clearFlag == true) {
                        await z_1.z.clearField(integerXpath);
                    }
                    else {
                        if (fieldId != "AUTO_RENEWAL_PERIOD_MONTHS") {
                            if (dbTestDataFlag == true) {
                                fieldVal = dbTestData;
                            }
                            else {
                                fieldVal = await CommonComponent.randomNumberString(2);
                            }
                            await z_1.z.fillField(integerXpath, fieldVal);
                        }
                        else {
                            if (dbTestDataFlag == true) {
                                fieldVal = dbTestData;
                            }
                            else {
                                fieldVal = await CommonComponent.randomNumberString(1);
                            }
                            await z_1.z.fillField(integerXpath, fieldVal);
                        }
                    }
                }
                await z_1.z.waitForVisible(integerXpath);
                fieldValue = await CommonComponent.getUITextUsingJavascript(integerXpath);
                logger_1.logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
            }
            catch (error) {
                logger_1.logger.info("Failed while filling the integer value");
            }
        }
        else if (fieldTypeVal.toLowerCase() == "date") {
            try {
                let dateField = metadataInputCount;
                await z_1.z.scrollIntoView(dateField);
                if (clearFlag == true) {
                    await z_1.z.clearField(dateField);
                }
                else {
                    if (dbTestDataFlag == true) {
                        fieldVal = dbTestData;
                        await z_1.z.fillField(dateField, fieldVal);
                    }
                    else {
                        if (fieldId == "Contract_Expiration_Date") {
                            logger_1.logger.info("Contract expiration date is already filled");
                        }
                        else {
                            await z_1.z.click(dateField);
                            if (fieldId == "Contract_Effective_Date") {
                                if ((await CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.SELECTED_DAY)) != null) || (await CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.SELECTED_DAY)) != undefined)) {
                                    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.SELECTED_DAY));
                                }
                                else {
                                    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CALENDAR_CURRENT_DAY));
                                }
                                // } else if (fieldId != "Contract_Renewal_Date") {
                            }
                            else if (fieldId != "Reminder_Date") {
                                // await CommonComponent.auroraRandomCombinedDateSelectionBasedonClick(await AuroraLmt.getElement(auroraContractDetailsElements.COMBINED_DAY_MONTH_YEAR), await AuroraLmt.getElement(auroraContractDetailsElements.CURRENT_RANGE_YEAR_MONTH_DAY_OPTION_LIST));
                                if ((await CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.SELECTED_DAY)) != null) || (await CommonComponent.getHtmlElementData(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.SELECTED_DAY)) != undefined)) {
                                    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.SELECTED_DAY));
                                }
                                else {
                                    await z_1.z.click(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CALENDAR_CURRENT_DAY));
                                }
                            }
                            else {
                                await CommonComponent.auroraRandomCombinedDateSelectionBasedonClick(await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.COMBINED_DAY_MONTH_YEAR), await AuroraLmt_1.AuroraLmt.getElement(AuroraContractDetailsElements_1.auroraContractDetailsElements.CURRENT_RANGE_YEAR_MONTH_DAY_OPTION_LIST));
                            }
                        }
                    }
                }
                await z_1.z.waitForVisible(dateField);
                fieldValue = await CommonComponent.getUITextUsingJavascript(dateField);
                logger_1.logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
            }
            catch (error) {
                logger_1.logger.info("Failed to fill date value in the contract");
            }
        }
        else if (fieldTypeVal.toLowerCase() == "textarea") {
            try {
                let textareaXpath = metadataInputCount;
                if (await CommonComponent.verifyFieldisReadonly(textareaXpath) == true) {
                    logger_1.logger.info("Metadata is disabled on UI so value cannot be filled,Skipped");
                    fieldValue = "";
                }
                else {
                    await z_1.z.scrollIntoView(textareaXpath);
                    if (clearFlag == true) {
                        await z_1.z.clearField(textareaXpath);
                    }
                    else {
                        if (dbTestDataFlag == true) {
                            fieldVal = dbTestData;
                        }
                        else {
                            fieldVal = await CommonComponent.randomString(40);
                        }
                        await z_1.z.fillField(textareaXpath, fieldVal);
                    }
                }
                await z_1.z.waitForVisible(textareaXpath);
                fieldValue = await CommonComponent.getUITextUsingJavascript(textareaXpath);
                logger_1.logger.info(fieldId + " || " + fieldType + " || " + fieldVal);
            }
            catch (error) {
                logger_1.logger.info("Failed to fill textarea value in the contract");
            }
        }
        else if (fieldTypeVal.toLowerCase() == "file") {
            try {
                let fileXpath = metadataInputCount;
                await z_1.z.scrollIntoView(fileXpath);
                await z_1.z.attachFile(fileXpath, await AuroraLmt_1.AuroraLmt.getData("DOCX_FORMAT_DOCUMENT"));
                // let fileInputXpath = await CommonComponent.retrieveParticularElementXpathBasedonString(fieldId, await AuroraLmt.getElement(contractDetailsElements.DYN_STRINGFIELD));
                let fileInputXpath = metadataInputCount;
                await z_1.z.waitForVisible(fileInputXpath);
                fieldValue = await CommonComponent.getUITextUsingJavascript(fileInputXpath);
                logger_1.logger.info(fieldId + " || " + fieldType + " || " + fieldValue);
            }
            catch (error) {
                logger_1.logger.info("Failed to upload contract in the contract");
            }
        }
        else if (fieldTypeVal.toLowerCase() == "radio") {
            logger_1.logger.info("Manual case :Metadata field might be checkbox or radio button,Skipped");
        }
        else if (fieldType == "" || fieldType == null || fieldType == undefined) {
            logger_1.logger.info("Manual case :Metadata field might be checkbox or invalid,Skipped");
        }
        else {
            logger_1.logger.info("!!!!!!!!!!!!! Fieldtype not identified !!!!!!!!!!!!!!!!!!!");
        }
        return fieldValue;
    }
    /**
    * To verify error for specified field type
    * @param {string} metadataXpath
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyParticularFieldErrMsg(metadataXpath) {
        let flag = false;
        let errorFieldMsgXpath = metadataXpath + "";
        if ((await CommonComponent.getHtmlElementData(errorFieldMsgXpath) != null) || (await CommonComponent.getHtmlElementData(errorFieldMsgXpath) != undefined)) {
            flag = true;
        }
        return flag;
    }
    /**
    * To verify error for specified field type
    * @param {string} headerListXpath //flag to fill only mandatory fields
    * @param {string} dnyParticularHeaderXpath   //to clear field on UI
    * @param {string} dynamicMetadataXpath //flag to pass value from test data table
    * @param {string} fieldTypeCheck  //to pass value from test data table
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyErrorMsgSpecifiedFieldType(headerListXpath, dnyParticularHeaderXpath, dynamicMetadataXpath, fieldTypeCheck) {
        let flag = false;
        let headerList = await CommonComponent.retrieveUITextListBasedonIndexWithSingleXpath(headerListXpath);
        let headerXpathList = await CommonComponent.retrieveElementXpathBasedonIndex(headerListXpath);
        logger_1.logger.info("Number of Headers : " + headerList.length);
        for (let i = 0; i < headerList.length; i++) {
            logger_1.logger.info("Header number " + (i + 1) + " : " + headerList[i]);
            let headerName = headerList[i];
            if (headerName.includes("CP")) {
                continue;
            }
            // commented below code bcoz Contract header is removed inside the form
            let particularHeader = await CommonComponent.retrieveParticularElementXpathBasedonString(headerName, dnyParticularHeaderXpath);
            await z_1.z.click(headerXpathList[i]);
            await z_1.z.scrollIntoView(particularHeader);
            if (headerName.includes("*")) {
                headerName = headerName.replace("*", "");
            }
            logger_1.logger.info("Header number " + (i + 1) + " : " + headerName);
            flag = await this.verifyFieldErrMsg(dynamicMetadataXpath, headerName, fieldTypeCheck);
            if (flag == false) {
                flag = false;
                break;
            }
        }
        return flag;
    }
    /**
    * To verify field error message
    * @param {string} dynamicMetadataXpath
    * @param {string} headerValue
    * @param {string} fieldTypeCheck
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyFieldErrMsg(dynamicMetadataXpath, headerValue, fieldTypeCheck) {
        let flag = false;
        let metadataInputCount = await CommonComponent.retrieveElementXpathBasedonString(headerValue + " ", dynamicMetadataXpath);
        logger_1.logger.info("Number of Fields : " + metadataInputCount.length);
        for (let k = 0; k < metadataInputCount.length; k++) {
            let fieldId = await z_1.z.grabAttributeFrom(metadataInputCount[k], "name");
            if (fieldId == "status") {
                continue;
            }
            let fieldType = await z_1.z.grabAttributeFrom(metadataInputCount[k], "fieldtype");
            fieldType = fieldType + "";
            fieldType = fieldType.toLowerCase();
            logger_1.logger.info("************************field type**********************", fieldType);
            if (fieldType != fieldTypeCheck) {
                continue;
            }
            let metadataPresentonUI = await CommonComponent.isEnabledByXpath(metadataInputCount[k]);
            let metadataDisabled = (await CommonComponent.verifyFieldisDisabledOnUI(metadataInputCount[k]));
            let metadataHidden = (await CommonComponent.verifyFieldisHidden(metadataInputCount[k]));
            if ((metadataPresentonUI == true && (metadataDisabled != true || metadataDisabled == null || metadataDisabled == undefined) && metadataHidden != true)) {
                if (await CommonComponent.verifyFieldHasParticularAttribute(metadataInputCount[k]) == true) {
                    flag = await this.verifyParticularFieldErrMsg(metadataInputCount[k]);
                }
                else {
                    logger_1.logger.info("Metadata is not having fieldtype attribute,skipped");
                }
            }
            else {
                logger_1.logger.info("Metadata is not available in the overlay,skipped");
            }
            if (flag == false) {
                flag = false;
                break;
            }
        }
        return flag;
    }
    /**
    * To verify mandatory error for unfilled  mandatory fields
    * @param {string} allMandatorySymbolListXpath
    * @param {string} allMandatoryErrMsgListXpath
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyMandatoryMessageForAllmandatoryFields(allMandatorySymbolListXpath, allMandatoryErrMsgListXpath) {
        let allFieldsMandatorySymbolXpathCount = await CommonComponent.grabNumberElements(allMandatorySymbolListXpath);
        let allFieldsMandatoryErrorMsgXpathCunt = await CommonComponent.grabNumberElements(allMandatoryErrMsgListXpath);
        let flag = allFieldsMandatorySymbolXpathCount - 1 == allFieldsMandatoryErrorMsgXpathCunt - 1;
        return flag;
    }
    /**
    * To verify error message for specific field type
    * @param {string} allMandatoryErrMsgListXpath
    * @param {number} filledFieldCount
    * @return {boolean} flag
    * @author somnath.k
    */
    static async verifyErrorMsgForSpecificType(allMandatoryErrMsgListXpath, filledFieldCount) {
        let errorFIeldCount = await CommonComponent.grabNumberElements(allMandatoryErrMsgListXpath);
        return errorFIeldCount == filledFieldCount;
    }
}
exports.CommonComponent = CommonComponent;
