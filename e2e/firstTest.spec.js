describe('Top Page', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('has a screen', async () => {
    await expect(element(by.id('top-view'))).toBeVisible();
  });

  it('has a touchable button', async () => {
    await expect(element(by.text('Native'))).toBeVisible();
    await element(by.id('main-button')).tap();
  });
});
