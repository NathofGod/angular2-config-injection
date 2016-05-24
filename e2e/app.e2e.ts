import { InjectionExamplePage } from './app.po';

describe('injection-example App', function() {
  let page: InjectionExamplePage;

  beforeEach(() => {
    page = new InjectionExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('injection-example works!');
  });
});
