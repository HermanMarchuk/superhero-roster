function getHeroItem(hero) {
  return $(`[data-target="#${hero}Modal"]`)
}

function getHeroFactModal(hero) {
  return {
    get itself() {return $(`#${hero}Modal`)},
    get headerText() {return $(`#${hero}ModalLabel`)},
    get bodyText() {return $('.modal-body')},
    get closeButton() {return $('.modal-footer button')},
    waitForVisibility() {
      const EC = protractor.ExpectedConditions;
      return browser.wait(EC.visibilityOf(this.itself), 5000, 'Expected that modal is visible but it\'s not')
    }
  }
}

const heroFactsFragment = {
  get heroFactsListLink() {return $('#navbarDropdown')},
  get wolverineItem() {return getHeroItem('wolverine')},
  get wolverineModal() {return getHeroFactModal('wolverine')},
  get spiderManItem() {return getHeroItem('spiderman')},
  get spiderManModal() {return getHeroFactModal('spiderman')}
};

module.exports = heroFactsFragment;