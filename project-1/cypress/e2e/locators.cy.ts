/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
      cy.visit("http://localhost:3000/elements")
  })

  it("locating elements with get", () => {
    // Get all elements by tag name
    cy.get("button");

    // Get all elements by classname
    cy.get(".btn-with-class");

   cy.get("[class='Elements-btn btn-with-class more-btn-classes'")

   cy.get("#btn-with-id")

   cy.get("[type='submit']")
   cy.get("button.Elements-btn");
   cy.get("button.Elements-btn#btn-with-id");

   cy.get("button.Elements-btn[type='submit']")

   cy.getByData("btn-id-1")


  })
})