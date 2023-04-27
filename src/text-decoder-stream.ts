import { TextDecoderStream as WebTextDecoderStream } from 'stream/web'

export const TextDecoderStream = WebTextDecoderStream as typeof globalThis.TextDecoderStream
