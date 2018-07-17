const expect = require('expect');

const { generateMessage } = require('./message.js');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    const from = 'jy'
    const text = 'what\'s up'
    const message = generateMessage(from, text);

    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(typeof message.createdAt).toBe('number');
  });
});
