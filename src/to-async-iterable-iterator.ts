import { go } from '@blackglory/go'

export function toAsyncIterableIterator<T>(
  stream: ReadableStream<T>
): AsyncIterableIterator<T> {
  const reader = stream.getReader()

  return go(async function* (): AsyncIterableIterator<T> {
    try {
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        yield value
      }
    } finally {
      reader.releaseLock()
    }
  })
}
