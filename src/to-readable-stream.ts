import { ReadableStream } from './readable-stream.js'

export function toReadableStream<T>(
  iterable: Iterable<T> | AsyncIterable<T>
): ReadableStream<T> {
  let iterator: Iterator<T> | AsyncIterator<T>

  return new ReadableStream<T>({
    start(controller: ReadableStreamDefaultController) {
      if (Symbol.asyncIterator in iterable) {
        // @ts-ignore
        iterator = iterable[Symbol.asyncIterator]()
      } else if (Symbol.iterator in iterable) {
        // @ts-ignore
        iterator = iterable[Symbol.iterator]()
      }
    }
  , async pull(controller: ReadableStreamDefaultController): Promise<void> {
      const { value, done } = await iterator.next()

      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    }
  , async cancel(reason: unknown): Promise<void> {
      await iterator.throw?.(reason)
    }
  })
}
