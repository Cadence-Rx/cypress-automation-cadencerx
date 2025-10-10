class BasePage {
    navigate(path: string) {
        cy.fixture("config").then((data) => {
            cy.visit(data.baseUrl + path);
        });
    }

    getPageTitle() {
        return cy.title();
    }
}

export default BasePage;