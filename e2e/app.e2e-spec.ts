import { FlickrUiPage } from './app.po';

describe('flickr-ui App', () => {
  let page: FlickrUiPage;

  beforeEach(() => {
    page = new FlickrUiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
