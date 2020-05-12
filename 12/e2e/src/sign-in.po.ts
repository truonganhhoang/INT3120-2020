import { by, element } from 'protractor';

export class SignInPage {
  getPageTitle() {
    return element(by.css('.header')).getText();
  }
}
