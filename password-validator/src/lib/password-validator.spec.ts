import { passwordValidator, rules1} from './password-validator';

describe('passwordValidator', () => {
  it('should work', () => {
    const result = passwordValidator("_Hello12!", rules1);
    expect(result).toEqual(true);
  });

  it('should have at least 8 chars', () => {
    expect(passwordValidator("He_lo2!", rules1)).toEqual(false);
  });

  it('should contain a capital letter', () => {
    expect(passwordValidator("hello12!", rules1)).toEqual(false);
  });

  it('should contain a lowercase letter', () => {
    expect(passwordValidator("HELLO12!", rules1)).toEqual(false);
  });
  it('should contain a number', () => {
    expect(passwordValidator("HEELLo!!", rules1)).toEqual(false);
  })

  it('should contain a _', () => {
    expect(passwordValidator("HEELLo!!", rules1)).toEqual(false);
  })

  it('should satisfy rules2', () => {
    expect(passwordValidator("HEo!!", rules1)).toEqual(false);
  })


});