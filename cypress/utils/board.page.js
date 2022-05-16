const header = ".board-header"
const boardBtn = "button[title='Board views']"
const boardName = ".js-board-editing-target.board-header-btn-text"
const permissionBtn = "#permission-level"
const filterBtn = "._3yy0H7Muo3CDUY button"
const menu = ".board-header-btn.mod-show-menu.js-show-sidebar"
const boardList = ".pop-over-list"
const boardOptions = ".pop-over-list li div"

const expected = { // expected results
    boardNameText: "NewBoard",
    permissionStatus: "Public",
}

const openPage = () => { 
    cy.visit('https://trello.com/b/WobiSXIJ/newboard')
}

//elements
const checkPageHeader = () => {
    cy.get(header).should('be.visible')
}

const checkBoardBtn = () => {
    cy.get(boardBtn).should('be.visible')
}

const checkBoardName = () => {
    cy.get(boardName).should('be.visible')
}

const checkPermissionBtn = () => {
    cy.get(permissionBtn).should('be.visible')
}

const checkFilterBtn = () => {
    cy.get(filterBtn).should('be.visible')
}

const checkShowMenuBtn = () => {
    cy.get(menu).should('be.visible')
}

//values
const checkBoardNameTxt = () => { 
    cy.get(boardName).should('have.text', expected.boardNameText)
}

const checkPermissionStatus = () => {
    cy.get(permissionBtn).should('have.text', expected.permissionStatus)
}

//functionality
const checkBoardOptionsList = () => { 
    cy.get(boardBtn).click()
    cy.get(boardList).should('be.visible')
}

//getters

const getOptions = () => { 
    cy.get(boardOptions)
        .should('have.length', 6)
        .then(($els) => {
            return (
                Cypress.$.makeArray($els)
                    .map((el) => el.innerText)
            )
        })
        .should('deep.equal', ['Board', 'Map', 'Timeline', 'Calendar', 'Dashboard', 'Table'])
}


export default {
    openPage,
    getOptions,
    checkPageHeader,
    checkBoardBtn,
    checkBoardName,
    checkPermissionBtn,
    checkFilterBtn,
    checkShowMenuBtn,
    checkBoardNameTxt,
    checkPermissionStatus,
    checkBoardOptionsList,
}

