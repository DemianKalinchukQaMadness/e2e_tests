const {$} = require("protractor");

class HeaderFragment {

    constructor() {

        this.root = $('header.header')
        this.searchInputXPath = this.root.$('input[name="search"]')
        this.searchButton = this.root.$('.button.search-form__submit')

    }

}
module.exports = {
    HeaderFragment
}