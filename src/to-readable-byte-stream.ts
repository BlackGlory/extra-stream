import { ReadableStream } from './readable-stream.js'

export function toReadableByteStream(
  iterable: Iterable<ArrayBufferView> | AsyncIterable<ArrayBufferView>
): ReadableStream<Uint8Array> {
  let iterator: Iterator<ArrayBufferView> | AsyncIterator<ArrayBufferView>

  // @ts-ignore
  return new ReadableStream<Uint8Array>({
    // @ts-ignore
    type: 'bytes'
    // @ts-ignore
  , start(controller: ReadableByteStreamController): void {
      if (Symbol.asyncIterator in iterable) {
        // @ts-ignore
        iterator = iterable[Symbol.asyncIterator]()
      } else if (Symbol.iterator in iterable) {
        // @ts-ignore
        iterator = iterable[Symbol.iterator]()
      }
    }
    // @ts-ignore
  , async pull(controller: ReadableByteStreamController): Promise<void> {
      const { value, done } = await iterator.next()

      if (done) {
        controller.close()
      } else {
        if (controller.byobRequest) {
          controller.byobRequest.view
        } else {
          controller.enqueue(new Uint8Array(value.buffer))
        }
      }
    }
  , async cancel(reason: unknown): Promise<void> {
      await iterator.throw?.(reason)
    }
  })
}
