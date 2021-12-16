import { isObject, isBoolean, isFunction } from '@blackglory/types'

export function isNodeJSWritableStream(val: any): val is NodeJS.WritableStream {
  return isObject(val)
      && isBoolean((val as any).writable)
      && isFunction((val as any).write)
}
