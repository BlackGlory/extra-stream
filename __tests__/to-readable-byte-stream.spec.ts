import { toReadableByteStream } from '@src/to-readable-byte-stream.js'
import { ReadableStream } from '@src/readable-stream.js'
import { go } from '@blackglory/go'
import { toAsyncIterableIterator } from '@src/to-async-iterable-iterator.js'
import { toArrayAsync } from 'iterable-operator'

describe('toReadableByteStream', () => {
  test('iterable', async () => {
    const iter = go(function* () {
      yield new Uint8Array([1, 2])
      yield new Uint8Array([3, 4])
    })

    const stream = toReadableByteStream(iter)
    const result = await toArrayAsync(toAsyncIterableIterator(stream))

    expect(stream).toBeInstanceOf(ReadableStream)
    expect(result).toStrictEqual([
      new Uint8Array([1, 2])
    , new Uint8Array([3, 4])
    ])
  })

  test('async iterable', async () => {
    const iter = go(async function* () {
      yield new Uint8Array([1, 2])
      yield new Uint8Array([3, 4])
    })

    const stream = toReadableByteStream(iter)
    const result = await toArrayAsync(toAsyncIterableIterator(stream))

    expect(stream).toBeInstanceOf(ReadableStream)
    expect(result).toStrictEqual([
      new Uint8Array([1, 2])
    , new Uint8Array([3, 4])
    ])
  })
})
