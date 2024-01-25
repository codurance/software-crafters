import { Fn } from '@swc/core';

const checkLengthBuilder = (length) => {
  return (password) => password.length >= length;
};

const containsRegexBuilder = (regex) => {
  return (password) => regex.test(password)
}


const isValidLength = checkLengthBuilder(8)
const hasLowerCase = containsRegexBuilder(/[a-z]/)
const hasUpperCase = containsRegexBuilder(/[A-Z]/)
const hasUnderscore = containsRegexBuilder(/_/)
const hasNumber = containsRegexBuilder(/\d/)
export const rules1 = [isValidLength, hasLowerCase, hasUpperCase, hasUnderscore, hasNumber]
export const rules2 = [checkLengthBuilder(6), hasLowerCase, hasUpperCase, hasNumber]
export function passwordValidator(password: string, rules): boolean {
  return rules.reduce((acc,fn) => fn(password) && acc, true)
}

