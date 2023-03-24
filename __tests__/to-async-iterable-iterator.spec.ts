import { toAsyncIterableIterator } from '@src/to-async-iterable-iterator.js'
import { go } from '@blackglory/go'
import { toReadableStream } from '@src/to-readable-stream.js'
import { toArrayAsync } from 'iterable-operator'
import { getErrorPromise } from 'return-style'

describe('toAsyncIterableIterator', () => {
  test('handle yielded values', async () => {
    const stream = toReadableStream(go(function* () {
      yield 1
      yield 2
    }))

    const iter = toAsyncIterableIterator(stream)
    const locked1 = stream.locked
    const result = await toArrayAsync(iter)
    const locked2 = stream.locked

    expect(result).toStrictEqual([1, 2])
    expect(locked1).toBe(true)
    expect(locked2).toBe(false)
  })

  test('handle thrown errors', async () => {
    const customError = new Error('custom error')
    const stream = toReadableStream(go(function* () {
      yield 1
      throw customError
      yield 2
    }))

    const iter = toAsyncIterableIterator(stream)
    const locked1 = stream.locked
    const err = await getErrorPromise(toArrayAsync(iter))
    const locked2 = stream.locked

    expect(err).toBe(customError)
    expect(locked1).toBe(true)
    expect(locked2).toBe(false)
  })
})
