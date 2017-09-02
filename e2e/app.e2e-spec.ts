import { CustompipePage } from './app.po';

describe('custompipe App', () => {
  let page: CustompipePage;

  beforeEach(() => {
    page = new CustompipePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
