const helloWorld = require('./helloWorld');

describe('Hello World', function () {
  test('says "Heeeeeeeyeyeyeyey"', function () {
    expect(helloWorld()).toEqual('message');
  });
});
