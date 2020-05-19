import { browser } from 'protractor';
import { SignInPage } from './sign-in.po';

describe('sign in', () => {
  let page: SignInPage;

  beforeEach(() => {
    page = new SignInPage();
  });

  it('should render sign in page', () => {
    browser.get('/sign-in');
    expect(page.getPageTitle()).toContain('Log into your account');
  });

  afterAll(() => {
    browser.sleep(20000);
  });
});
