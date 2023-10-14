import Validator from '../Validator';

test.each([
  ['Hel-low_orld', true],
  ['0Helloworld', false],
  ['Helloworld1', false],
  ['-Helloworld', false],
  ['Helloworld_', false],
  ['Hell000world', false],
  ['Hello-Мир-World', false],
])('test validator with username = %u', (userName, expected) => {
  const validator = new Validator(userName);
  if (expected) {
    expect(validator.validateUsername()).not.toBeFalsy();
  } else {
    expect(validator.validateUsername()).toBeFalsy();
  }
});
