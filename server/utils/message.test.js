const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message.js');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    const from = 'jy';
    const text = 'what\'s up';
    const message = generateMessage(from, text);

    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location object', () => {
    const from = 'jy';
    const latitude = 1;
    const longitude = 1;
    const message = generateLocationMessage(from, latitude, longitude);

    expect(message.from).toBe(from);
    expect(message.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
    expect(typeof message.createdAt).toBe('number');
  });
});
