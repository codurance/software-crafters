import { passwordValidator } from './password-validator';

describe('passwordValidator', () => {
  it('should work', () => {
    expect(passwordValidator("Hello12!")).toEqual(true);
  });
});
