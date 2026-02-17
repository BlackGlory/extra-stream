import { TextEncoderStream as WebTextEncoderStream } from 'node:stream/web'

export const TextEncoderStream = WebTextEncoderStream as typeof globalThis.TextEncoderStream
