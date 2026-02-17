import { isObject, isBoolean, isFunction } from '@blackglory/prelude'

export function isNodeJSReadableStream(val: unknown): val is NodeJS.ReadableStream {
  return isObject(val)
      && isBoolean(val.readable)
      && isFunction(val.read)
      && isFunction(val.pipe)
}

export function isntNodeJSReadableStream<T>(
  val: T
): val is Exclude<T, NodeJS.ReadableStream> {
  return !isNodeJSReadableStream(val)
}
