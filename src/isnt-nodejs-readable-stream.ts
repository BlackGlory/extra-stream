import { isNodeJSReadableStream } from './is-nodejs-readable-stream'

export function isntNodeJSReadableStream<T>(val: T): val is Exclude<T, NodeJS.ReadableStream> {
  return !isNodeJSReadableStream(val)
}
