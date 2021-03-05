import { isNodeJSWritableStream } from '@src/is-nodejs-writable-stream'
import { Readable, Writable } from 'stream'

describe('isNodeJSWritableStream', () => {
  describe('val is NodeJS.WritableStream', () => {
    it('return true', () => {
      const stream = new Writable()

      const result = isNodeJSWritableStream(stream)

      expect(result).toBe(true)
    })
  })

  describe('val is not NodeJS.WritableStream', () => {
    it('return false', () => {
      const stream = new Readable()

      const result = isNodeJSWritableStream(stream)

      expect(result).toBe(false)
    })
  })
})
