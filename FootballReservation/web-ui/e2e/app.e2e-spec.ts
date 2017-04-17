import { ReserveFootballFrontendPage } from './app.po';

describe('reserve-football-frontend App', () => {
  let page: ReserveFootballFrontendPage;

  beforeEach(() => {
    page = new ReserveFootballFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
