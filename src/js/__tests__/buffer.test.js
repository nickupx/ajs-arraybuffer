import ArrayBufferConverter, { getBuffer } from '../buffer'

const arrayBufferConverter = new ArrayBufferConverter()
arrayBufferConverter.load(getBuffer())

test('should return string', () => {
  expect(arrayBufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}')
})
