describe("Testing my site!!!", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const nameInput = () => cy.get('input[id="nameInput"]');
  const emailInput = () => cy.get('input[id="emailInput"]');
  const passwordInput = () => cy.get('input[id="passwordInput"]');
  const checkboxInput = () =>cy.get('input[id="checkboxInput"]');
  const submit = () => cy.get('input[id="submit"]')

  it("The element is showing", () => {
    nameInput()
      .should("exist")
      .type("luis gonzalez")
      .should("have.value", "luis gonzalez");
  });

  it("get email element and test it", () => {
    emailInput()
	.should("exist")
	.type("logicoycoherente@gmail.com");
  });

  it("get password element and test it", () => {
    passwordInput()
	.should("exist")
	.type("12345678790abc");
  });

  it("get checkbox element and test it", () => {
    checkboxInput()
	.should("exist")
	.check();
  });

  it("get submitelement and test it", () => {
    submit()
	.should("exist")
	.submit();
  });
});
