import { WritableStream as WebWritableStream } from 'node:stream/web'

export const WritableStream = WebWritableStream as typeof globalThis.WritableStream
