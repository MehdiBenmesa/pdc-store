import { PdcStorePage } from './app.po';

describe('pdc-store App', function() {
  let page: PdcStorePage;

  beforeEach(() => {
    page = new PdcStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
