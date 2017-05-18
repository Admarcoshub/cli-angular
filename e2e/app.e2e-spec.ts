import { MiapplicacionPage } from './app.po';

describe('miapplicacion App', () => {
  let page: MiapplicacionPage;

  beforeEach(() => {
    page = new MiapplicacionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
