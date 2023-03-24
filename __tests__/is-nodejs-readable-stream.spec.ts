import { isNodeJSReadableStream } from '@src/is-nodejs-readable-stream.js'
import { Readable, Writable } from 'stream'

describe('isNodeJSReadableStream', () => {
  test('val is NodeJS.ReadableStream', () => {
    const stream = new Readable()

    const result = isNodeJSReadableStream(stream)

    expect(result).toBe(true)
  })

  test('val is not NodeJS.ReadableStream', () => {
    const stream = new Writable()

    const result = isNodeJSReadableStream(stream)

    expect(result).toBe(false)
  })
})
