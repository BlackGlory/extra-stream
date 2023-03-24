import { ReadableStream as WebReadableStream } from 'node:stream/web'

export const ReadableStream = WebReadableStream as typeof globalThis.ReadableStream
