const reverseString = require('./reverse');

// To find the exist or not
test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
  });


// toLowerCase with reverse
test('Reverse the string', () => {
    expect(reverseString('SHEBA')).toEqual('abehs');
  });