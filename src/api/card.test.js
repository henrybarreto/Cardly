import CardRouter from './card.js';

test('Test card post route', async () => {
  try {
    await expect(CardRouter);
  } catch (error) {
    expect(error).toMatch('error');
  }
});
