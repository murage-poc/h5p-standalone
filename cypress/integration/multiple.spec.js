describe('multiple', () => {
  it('should display 2 h5ps', () => {

    cy.visit('test/multiple.html');

    cy.get('#h5p-container-1 iframe.h5p-iframe.h5p-iframe.h5p-initialized').should(iframe => {
      expect(iframe.contents().find('.h5p-content')).to.exist;
    });

    cy.get('#h5p-container-2 iframe.h5p-iframe.h5p-iframe.h5p-initialized').should(iframe => {
      expect(iframe.contents().find('.h5p-content')).to.exist;
    });
  });
});