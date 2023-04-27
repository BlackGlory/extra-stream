import { TextEncoderStream as WebTextEncoderStream } from 'stream/web'

export const TextEncoderStream = WebTextEncoderStream as typeof globalThis.TextEncoderStream
