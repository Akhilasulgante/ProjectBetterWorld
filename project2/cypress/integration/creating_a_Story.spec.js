/* global cy*/

describe("Creating a Story", () => {
  it("Visiting the URL", () => {
    cy.visit("http://localhost:3000/Stories");
  });
  it("Typing in input field", () => {
    cy.get('.name input[name="name"]').type("First name");
  });

  it("Clicking button", () => {
    cy.get(".btnstory button#strybtn").click();
  });
  it("Displaying with label", () => {
    cy.get(".Fname").eq(0).should("have.text", "Name:First name ");
  });
});
