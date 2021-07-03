import { isRecord, isBoolean, isFunction } from '@blackglory/types'

export function isNodeJSWritableStream(val: any): val is NodeJS.WritableStream {
  return isRecord(val)
      && isBoolean(val.writable)
      && isFunction(val.write)
}
