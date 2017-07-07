import { SwiftBoatsPage } from './app.po';

describe('swift-boats App', () => {
  let page: SwiftBoatsPage;

  beforeEach(() => {
    page = new SwiftBoatsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
