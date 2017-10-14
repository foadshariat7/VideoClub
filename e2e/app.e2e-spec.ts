import { VideoClubPage } from './app.po';

describe('video-club App', () => {
  let page: VideoClubPage;

  beforeEach(() => {
    page = new VideoClubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
