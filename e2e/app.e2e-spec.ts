import { MunzePage } from './app.po';

describe('munze App', () => {
  let page: MunzePage;

  beforeEach(() => {
    page = new MunzePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
