Feature('Review Restaurant');

Scenario('Visit Restaurant and give empty review', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.card');

  I.click(locate('.button-cta')
    .first());

  I.see('Review', 'h4');
  I.see('Kirim', 'button');

  I.click('.button-cta');

  I.see('Nama dan review tidak boleh kosong', '#err_review_form');
});

Scenario('Visit Restaurant and give review', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.card');

  I.click(locate('.button-cta')
    .first());

  I.see('Review', 'h4');
  I.see('Kirim', 'button');

  I.fillField('nama', 'Test Name');
  I.fillField('review', 'E2E Test');
  I.click('.button-cta');

  I.dontSee('Nama dan review tidak boleh kosong', '#err_review_form');
});
