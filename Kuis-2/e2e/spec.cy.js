describe("login", () => {
  it("passes", () => {
    cy.visit("http://greenvestvsr.herokuapp.com/login");
    cy.get("#username").type("test125");
    cy.get("#password").type("test125");
    cy.get("form > btn").click();
  });
});
