const mainPage = {
  heroList: () => $$('.list-group-item'),
  addHeroInput: () => $('#heroInput'),
  addHeroButton: () => $('#addHero-form button'),
  alertDanger: () => $('#addHero-Alert')
};

module.exports = mainPage;