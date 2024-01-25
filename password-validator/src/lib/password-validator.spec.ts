import { passwordValidator } from './password-validator';

describe('passwordValidator', () => {
  it('should work', () => {
    expect(passwordValidator()).toEqual('password-validator');
  });
});
