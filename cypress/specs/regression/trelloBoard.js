import board from '../../utils/board.page'

describe('Page Elements', () => {

    before(() => {
        board.openPage()
    })

    it('Verify That board Header is presented', () => {
        board.checkPageHeader()
    })

    it('Verify That Board button is presented', () => {
        board.checkBoardBtn()
    })

    it('Verify That Board name is presented', () => {
        board.checkBoardName()
    })

    it('Verify That Permission button is presented', () => {
        board.checkPermissionBtn()
    })

    it('Verify That Filter button is presented', () => {
        board.checkFilterBtn()
    })

    it('Verify That Show Menu button is presented', () => {
        board.checkShowMenuBtn()
    })

})

describe('Value of Elements', () => {

    it('Check Board name', () => {
        board.checkBoardNameTxt()
    })

    it('Verify that Permission status is Public', () => {
        board.checkPermissionStatus()
    })

})

describe('Functionality of Elements', () => {

    it('Verify that clicking on Board Button user is able to list of options', () => {
        board.checkBoardOptionsList()
    })

})