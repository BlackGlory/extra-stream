import { toAsyncIterableIterator } from '@src/to-async-iterable-iterator.js'
import { go } from '@blackglory/go'
import { toReadableStream } from '@src/to-readable-stream.js'
import { toArrayAsync } from 'iterable-operator'

test('toAsyncIterableIterator', async () => {
  const stream = toReadableStream(go(function* () {
    yield 1
    yield 2
  }))

  const iter = toAsyncIterableIterator(stream)
  const result = await toArrayAsync(iter)

  expect(result).toStrictEqual([1, 2])
})
