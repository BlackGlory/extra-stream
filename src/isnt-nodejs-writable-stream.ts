import { isNodeJSWritableStream } from './is-nodejs-writable-stream'

export function isntNodeJSWritableStream<T>(val: T): val is Exclude<T, NodeJS.WritableStream> {
  return !isNodeJSWritableStream(val)
}
