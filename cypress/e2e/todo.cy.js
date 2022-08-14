/// <reference types="Cypress" />

describe("Checking todo application", () => {
  it("check if todo application is present", () => {
    cy.visit("http://localhost:3000");

    cy.get("input").should("exist");

    cy.get("button").should("exist");
  });

  it("should able to add the tasks", () => {
    cy.visit("http://localhost:3000");

    cy.get(".todoList").children().should("have.length", 1);

    cy.get("button").type("learn redux{enter}");
  });
});
