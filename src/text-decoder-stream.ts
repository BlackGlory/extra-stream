import { TextDecoderStream as WebTextDecoderStream } from 'node:stream/web'

export const TextDecoderStream = WebTextDecoderStream as typeof globalThis.TextDecoderStream
