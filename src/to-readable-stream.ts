import { ReadableStream } from './readable-stream.js'
import { isIterable, isAsyncIterable, assert } from '@blackglory/prelude'

export function toReadableStream<T>(
  iterable: Iterable<T> | AsyncIterable<T>
): ReadableStream<T> {
  let iterator: Iterator<T> | AsyncIterator<T> | undefined

  return new ReadableStream<T>({
    start(controller: ReadableStreamDefaultController) {
      if (isIterable(iterable)) {
        iterator = iterable[Symbol.iterator]()
      } else if (isAsyncIterable(iterable)) {
        iterator = iterable[Symbol.asyncIterator]()
      }
    }
  , async pull(controller: ReadableStreamDefaultController): Promise<void> {
      assert(iterator, 'The iterator is undefined')

      const { value, done } = await iterator.next()

      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    }
  , async cancel(reason: unknown): Promise<void> {
      assert(iterator, 'The iterator is undefined')

      await iterator.throw?.(reason)
    }
  })
}
