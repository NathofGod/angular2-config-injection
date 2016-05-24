export class InjectionExamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('injection-example-app h1')).getText();
  }
}
