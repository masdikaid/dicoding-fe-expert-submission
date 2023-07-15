import likeButtonInitiator from '../src/scripts/utils/like-button-initiator';

describe('Liking Restaurant', () => {
  it('should show the like button when the restaurant has not been liked before', async () => {
    document.body.innerHTML = `
      <button aria-label="favourite button" 
              id="favourite" 
              type="button" 
              class="flex-row badge">
      </button>`;

    await likeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#favourite'),
      restaurant: {
        id: 1
      }
    });

    expect(document.querySelector('[id="fav-label"]').innerText)
      .toEqual('Tambah Favorit');
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    document.body.innerHTML = `
      <button aria-label="favourite button" 
              id="favourite" 
              type="button" 
              class="flex-row badge">
      </button>`;

    await likeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#favourite'),
      restaurant: {
        id: 1
      }
    });

    expect(document.querySelector('[id="fav-label"]').innerText)
      .not
      .toEqual('Favorit');
  });
});
