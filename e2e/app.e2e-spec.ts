import { SupermarketPage } from './app.po';

describe('supermarket App', () => {
  let page: SupermarketPage;

  beforeEach(() => {
    page = new SupermarketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
