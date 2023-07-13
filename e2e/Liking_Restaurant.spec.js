Feature('Liking Restaurant');

Scenario('Visit Page', ({ I }) => {
  I.amOnPage('/');
  I.see('Explore Restaurant');
});

Scenario('Restaurant list loaded', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.card');
  I.see('See Detail', '.button-cta');
});

Scenario('View detail restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.click(locate('.button-cta')
    .first());
});

Scenario('Like a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.click(locate('.button-cta')
    .first());

  I.seeElement('#favourite');
  I.see('Tambah Favorit', '#favourite');

  I.click('#favourite');
  I.see('Favorit', '#favourite');
});

Scenario('Unlike a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.click(locate('.button-cta')
    .first());

  I.seeElement('#favourite');
  I.see('Tambah Favorit', '#favourite');

  I.wait(5);

  I.click('#favourite');
  I.see('Favorit', '#favourite');

  I.click('//a[text()="Favorite"]');
  I.seeElement('.card');
  I.click(locate('.button-cta')
    .first());

  I.click('#favourite');
  I.see('Tambah Favorit', '#favourite');

  I.click('//a[text()="Favorite"]');
  I.dontSeeElement('.card');
});
