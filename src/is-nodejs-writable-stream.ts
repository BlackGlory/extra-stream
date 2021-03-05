import { isObject } from '@blackglory/types'

export function isNodeJSWritableStream(val: any): val is NodeJS.WritableStream {
  return isObject(val)
      && typeof val.writable === 'boolean'
      && typeof val.write === 'function'
}
