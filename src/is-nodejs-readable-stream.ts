import { isObject } from '@blackglory/types'

export function isNodeJSReadableStream(val: any): val is NodeJS.ReadableStream {
  return isObject(val)
      && typeof val.readable === 'boolean'
      && typeof val.read === 'function'
      && typeof val.pipe === 'function'
}
