import header from '../../utils/headerComponent'

describe('Page Elements', () => {

    before(() => {
        header.openPage()
    })

    it('Verify that page Header is presented', () => {
        header.checkPageHeader()
    })

    it('Verify that trello Logo is presented', () => {
        header.checkLogo()
    })

    it('Verify that Features button is presented', () => {
        header.checkFeaturesBtn()
    })

    it('Verify that Solutions button is presented', () => {
        header.checkSolutionsBtn()
    })

    it('Verify that Plans button is presented', () => {
        header.checkPlansBtn()
    })

    it('Verify that Pricing link is presented', () => {
        header.checkPricingBtn()
    })

    it('Verify that Resources button is presented', () => {
        header.checkResourcesBtn()
    })

    it('Verify that Login Link is presented', () => {
        header.checkLoginLink()
    })
})

describe('Value of Elements', () => {

    it('Check Pricing link text', () => {
        header.checkPricingTxt()
    })

    it('Check Login link text', () => {
        header.loginLinkTxt()
    })
})

describe('Functionality of Elements', () => {

    it('Verify that clicking on Features button user is able to see dropdown menu', () => {
        header.checkFeaturesDropdown()
    })

    it('Verify that clicking on Solution button user is able to see dropdown menu', () => {
        header.checkSolutionsDropdown()
    })

    it('Verify that clicking on Plans button user is able to see dropdown menu', () => {
        header.checkPlansDropdown()
    })

    it('Verify that clicking on Resources button user is able to see dropdown menu', () => {
        header.checkResourcesDropdown()
    })

    it('Verify that clicking on Pricing link user is redirected on Pricing Page', () => {
        header.checkPricingUrl()
    })
})