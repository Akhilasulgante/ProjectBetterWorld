/* global cy*/

describe("Creating a Story", () => {
  it("Displays the Story in the list", () => {
    cy.visit("http://localhost:3000/Stories");

    cy.get('.name input[name="name"]').type("First name");
    cy.get(".btnstory button#strybtn").click();
    cy.get('.name input[name="Fname"]').should("value", "First name");
    cy.contains("First name");
  });
});
