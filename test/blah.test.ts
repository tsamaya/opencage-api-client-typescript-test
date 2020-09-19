import { doGeocode } from '../src';

describe('geocode', () => {
  it('works', async () => {
    expect.assertions(1);
    try {
      const result = await doGeocode();
      expect(result).toBeTruthy();
    } catch (e) {
      console.log(e);
      expect(e).toMatch('error');
    }
  });
});
