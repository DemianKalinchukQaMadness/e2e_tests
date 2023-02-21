const {HeaderFragment} = require('./fragments')
const {waitForElementVisible} = require('../commons')

class MainPage {

    constructor() {
        this.header = new HeaderFragment()
    }

    async searchItems(searchValue) {
        await waitForElementVisible(this.header.root)
        await this.header.searchInputXPath.sendKeys(searchValue)
        await this.header.searchButton.click()
    }

}

module.exports = {
    MainPage
}