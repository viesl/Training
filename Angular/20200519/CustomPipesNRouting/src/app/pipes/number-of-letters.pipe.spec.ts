import { NumberOfLettersPipe } from './number-of-letters.pipe';

describe('NumberOfLettersPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberOfLettersPipe();
    expect(pipe).toBeTruthy();
  });
});
