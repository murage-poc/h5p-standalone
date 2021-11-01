describe('single', () => {
  it('should display h5p', () => {

    cy.visit('test/single.html');

    cy.get('iframe.h5p-iframe.h5p-iframe.h5p-initialized').should(iframe => {
      expect(iframe.contents().find('.h5p-content')).to.exist;

      iframe.contents().find('.h5p-true-false-answer').click();

      iframe.contents().find('.h5p-question-check-answer').click();

      expect(iframe.contents().find('.h5p-joubelui-score-bar-star')).to.exist;
    });
  });
});