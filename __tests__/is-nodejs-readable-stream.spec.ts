import { isNodeJSReadableStream } from '@src/is-nodejs-readable-stream'
import { Readable, Writable } from 'stream'

describe('isNodeJSReadableStream', () => {
  describe('val is NodeJS.ReadableStream', () => {
    it('return true', () => {
      const stream = new Readable()

      const result = isNodeJSReadableStream(stream)

      expect(result).toBe(true)
    })
  })

  describe('val is not NodeJS.ReadableStream', () => {
    it('return false', () => {
      const stream = new Writable()

      const result = isNodeJSReadableStream(stream)

      expect(result).toBe(false)
    })
  })
})
