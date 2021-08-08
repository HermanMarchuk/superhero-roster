const rosterFragment = {
  get heroList () {return $$('.list-group-item')},
  get addHeroInput () {return $('#heroInput')},
  get addHeroButton () {return $('#addHero-form button')},
  get alertDanger () {return $('#addHero-Alert')}
}

module.exports = rosterFragment;