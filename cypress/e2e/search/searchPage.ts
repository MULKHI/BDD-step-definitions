const URL1 = 'http://zero.webappsecurity.com/index.html'
const FIELD_SEARCH = '#searchTerm'

class SearchPage {
    static visit() {
       cy.visit(URL1) 
    }
    static fillSearch() {
        cy.get(FIELD_SEARCH).type('Online {enter}')
    }
    static ShowSearchResult() {
        cy.get('h2').contains('Search Results:')
        cy.get('li').find('a').should('contain.text', 'Online')
    }
}
export default SearchPage