const {protractor, browser, $} = require("protractor");


const expect = require('chai').expect
const EC = protractor.ExpectedConditions

const {MainPage} = require('../page_objects/main')


describe('First suit', function () {

    beforeEach(async () => {
        browser.waitForAngularEnabled(false);
    })

    const mainPage = new MainPage()

    it('First test ', async function () {

        await browser.get('https://rozetka.com.ua/ua/')

        const searchValue = 'телефон самсунг'
        await mainPage.searchItems(searchValue)

        const catalogTitleSelector = 'h1[itemprop="name"]'
        const checkTitle = $(catalogTitleSelector)



        await browser.wait(EC.visibilityOf(checkTitle), 10000, 'Catalog title should be visible')

        const catalogTitleValue = await checkTitle.getText()
        expect(catalogTitleValue.toLowerCase()).to.include('samsung')
    })

})