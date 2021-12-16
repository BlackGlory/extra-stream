import { isObject, isBoolean, isFunction } from '@blackglory/types'

export function isNodeJSReadableStream(val: any): val is NodeJS.ReadableStream {
  return isObject(val)
      && isBoolean(val.readable)
      && isFunction(val.read)
      && isFunction(val.pipe)
}
