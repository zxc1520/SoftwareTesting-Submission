describe("test case valid data", () => {
  it("passes", () => {
    // To Visit Simvest, must login first !
    cy.visit("http://greenvestvsr.herokuapp.com/login");
    cy.get("#username").type("haloku");
    cy.get("#password").type("abcde12345");
    cy.get("form > .btn").click();
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    // Visit Simulasi Investasi
    cy.get(":nth-child(7) > .nav-link").click();
    cy.get('[href="http://greenvestvsr.herokuapp.com/transaksi%20green-bond"]').click();
    cy.get(".link-info").click();
    cy.get(".shadow-custom-alt").click();

    // Test Case Valid Data<Int>
    // memasukkan data yang valid bertipe data Int.
    cy.get(".form-control").type("5000000");
    cy.get(".col > .btn").click();
  });
});

describe("test case invalid data float", () => {
  it("passes", () => {
    // To Visit Simvest, must login first !
    cy.visit("http://greenvestvsr.herokuapp.com/login");
    cy.get("#username").type("haloku");
    cy.get("#password").type("abcde12345");
    cy.get("form > .btn").click();
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    // Visit Simulasi Investasi
    cy.get(":nth-child(7) > .nav-link").click();
    cy.get('[href="http://greenvestvsr.herokuapp.com/transaksi%20green-bond"]').click();
    cy.get(".link-info").click();
    cy.get(".shadow-custom-alt").click();

    // Test Case Invalid Data <Float>
    // memasukkan data yang valid bertipe data Int.
    cy.get(".form-control").type("12.000");
    cy.get(".col > .btn").click();
  });
});

describe("test case invalid data string", () => {
  it("passes", () => {
    // To Visit Simvest, must login first !
    cy.visit("http://greenvestvsr.herokuapp.com/login");
    cy.get("#username").type("haloku");
    cy.get("#password").type("abcde12345");
    cy.get("form > .btn").click();
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    // Visit Simulasi Investasi
    cy.get(":nth-child(7) > .nav-link").click();
    cy.get('[href="http://greenvestvsr.herokuapp.com/transaksi%20green-bond"]').click();
    cy.get(".link-info").click();
    cy.get(".shadow-custom-alt").click();

    // Test Case Invalid Data <String>
    // memasukkan data yang valid bertipe data Int.
    cy.get(".form-control").type("duabelasriburupiah");
    cy.get(".col > .btn").click();
  });
});
