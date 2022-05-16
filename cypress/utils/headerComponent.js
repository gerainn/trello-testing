const pageHeader = "._2CPRbbImjkWhpY";
const logo = "svg[aria-label='Trello']";
const features = "._1Z8VTtJBuf-l8q > button:nth-child(1)";
const solutions = "._1Z8VTtJBuf-l8q > button:nth-child(2)";
const plans = "._1Z8VTtJBuf-l8q > button:nth-child(3)";
const pricing = "._3SFf_1_dTH6a-O";
const resources = "._1Z8VTtJBuf-l8q > button:nth-child(5)";
const loginLink = "a[href='/login?returnUrl=%2Fb%2FWobiSXIJ%2Fnewboard']";
const dropdownTitle = "div[class='_8nZjrGsRLm1_lt'] h3";
const plansDropDownTitle = "div[class='_1WRsWyjKMQFhEZ'] h3";

const expected = { // expected results
    featuresTitle: "Explore the features that help your team succeed",
    solutionsTitle: "Take a page out of these pre-built Trello playbooks designed for all teams",
    plansTitle: "Compare plans & pricing",
    resourcesTitle: "Learn & connect",
}



const openPage = () => {
    cy.visit('https://trello.com/b/WobiSXIJ/newboard')
}

//elements
const checkPageHeader = () => {
    cy.get(pageHeader).should('be.visible')
}

const checkLogo = () => {
    cy.get(logo).should('be.visible')
}

const checkFeaturesBtn = () => {
    cy.get(features).should('be.visible')
}

const checkSolutionsBtn = () => {
    cy.get(solutions).should('be.visible')
}

const checkPlansBtn = () => {
    cy.get(plans).should('be.visible')
}

const checkPricingBtn = () => {
    cy.get(pricing).should('be.visible')
}

const checkResourcesBtn = () => {
    cy.get(resources).should('be.visible')
}


const checkLoginLink = () => {
    cy.get(loginLink).should('be.visible')
}

//values
const checkPricingTxt = () => {
    cy.get(pricing).should('have.text', 'Pricing')
}

const loginLinkTxt = () => {
    cy.get(loginLink).should('have.text', 'Log in')
}

//functionality
const checkFeaturesDropdown = () => {
    cy.get(features).click()
    cy.get(dropdownTitle).should('have.text', expected.featuresTitle)
}

const checkSolutionsDropdown = () => {
    cy.get(solutions).click()
    cy.get(dropdownTitle).should('have.text', expected.solutionsTitle)
}

const checkPlansDropdown = () => {
    cy.get(plans).click()
    cy.get(plansDropDownTitle).should('have.text', expected.plansTitle)
}

const checkResourcesDropdown = () => {
    cy.get(resources).click()
    cy.get(dropdownTitle).should('have.text', expected.resourcesTitle)
}

const checkPricingUrl = () => {
    cy.get(pricing).click()
    cy.url().should('eq', 'https://trello.com/pricing')
}

export default {
    openPage,
    checkPageHeader,
    checkLogo,
    checkFeaturesBtn,
    checkSolutionsBtn,
    checkPlansBtn,
    checkPricingBtn,
    checkResourcesBtn,
    checkPricingTxt,
    checkLoginLink,
    checkFeaturesDropdown,
    checkSolutionsDropdown,
    checkPlansDropdown,
    checkResourcesDropdown,
    checkPricingUrl,
    loginLinkTxt,
}

