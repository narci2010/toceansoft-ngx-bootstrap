import { ToceansoftNgxBootstrapPage } from './app.po';

describe('toceansoft-ngx-bootstrap App', () => {
  let page: ToceansoftNgxBootstrapPage;

  beforeEach(() => {
    page = new ToceansoftNgxBootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
