import DeckRouter from './deck.js';

test('Test deck post router', async () => {
  try {
    await expect(DeckRouter);
  } catch (error) {
    expect(error).toMatch('error');
  }
});
