import { toReadableStream } from '@src/to-readable-stream.js'
import { ReadableStream } from '@src/readable-stream.js'
import { go } from '@blackglory/go'
import { toAsyncIterableIterator } from '@src/to-async-iterable-iterator.js'
import { toArrayAsync } from 'iterable-operator'
import { getErrorPromise } from 'return-style'

describe('toReadableStream', () => {
  test('iterable', async () => {
    const iter = go(function* () {
      yield 1
      yield 2
    })

    const stream = toReadableStream(iter)
    const result = await toArrayAsync(toAsyncIterableIterator(stream))

    expect(stream).toBeInstanceOf(ReadableStream)
    expect(result).toStrictEqual([1, 2])
  })

  test('async iterable', async () => {
    const iter = go(async function* () {
      yield 1
      yield 2
    })

    const stream = toReadableStream(iter)
    const result = await toArrayAsync(toAsyncIterableIterator(stream))

    expect(stream).toBeInstanceOf(ReadableStream)
    expect(result).toStrictEqual([1, 2])
  })

  test('iterable throws an error', async () => {
    const customError = new Error('custom error')
    const iter = go(function* () {
      yield 1
      throw customError
      yield 2
    })

    const stream = toReadableStream(iter)
    const err = await getErrorPromise(toArrayAsync(toAsyncIterableIterator(stream)))

    expect(stream).toBeInstanceOf(ReadableStream)
    expect(err).toBe(customError)
  })
})
