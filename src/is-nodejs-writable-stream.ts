import { isObject, isBoolean, isFunction } from '@blackglory/types'

export function isNodeJSWritableStream(val: any): val is NodeJS.WritableStream {
  return isObject(val)
      && isBoolean(val.writable)
      && isFunction(val.write)
}

export function isntNodeJSWritableStream<T>(
  val: T
): val is Exclude<T, NodeJS.WritableStream> {
  return !isNodeJSWritableStream(val)
}
