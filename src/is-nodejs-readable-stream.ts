import { isObject, isBoolean, isFunction } from '@blackglory/types'

export function isNodeJSReadableStream(val: any): val is NodeJS.ReadableStream {
  return isObject(val)
      && isBoolean((val as any).readable)
      && isFunction((val as any).read)
      && isFunction((val as any).pipe)
}
