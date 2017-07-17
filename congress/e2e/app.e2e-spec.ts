import { CongressPage } from './app.po';

describe('congress App', () => {
  let page: CongressPage;

  beforeEach(() => {
    page = new CongressPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
