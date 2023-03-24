import { TransformStream as WebTransformStream } from 'node:stream/web'

export const TransformStream = WebTransformStream as typeof globalThis.TransformStream
