import { isNodeJSWritableStream } from '@src/is-nodejs-writable-stream.js'
import { Readable, Writable } from 'stream'

describe('isNodeJSWritableStream', () => {
  test('val is NodeJS.WritableStream', () => {
    const stream = new Writable()

    const result = isNodeJSWritableStream(stream)

    expect(result).toBe(true)
  })

  test('val is not NodeJS.WritableStream', () => {
    const stream = new Readable()

    const result = isNodeJSWritableStream(stream)

    expect(result).toBe(false)
  })
})
