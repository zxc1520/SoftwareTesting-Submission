const { beforeEach } = require("node:test");

describe("empty spec", () => {
  // beforeEach(() => {
  //   cy.request("POST", "/login", { username: "admin", password: "admin" });
  // });

  it("passes", () => {
    cy.visit("http://greenvestvsr.herokuapp.com/");
  });
});
