# extra-stream
Utilities for Stream.

## Install
```sh
npm install --save extra-stream
# or
yarn add extra-stream
```

## API
### ReadableStream, WritableStream, TransformStream
The WHATWG `ReadableStream`, `WritableStream` and `TransformStream`.

### toReadableStream
```ts
function toReadableStream<T>(
  iterable: Iterable<T> | AsyncIterable<T>
): ReadableStream<T>
```

### toReadableByteStream
```ts
function toReadableByteStream(
  iterable: Iterable<ArrayBufferView> | AsyncIterable<ArrayBufferView>
): ReadableStream<Uint8Array>
```

### toAsyncIterableIterator
```ts
function toAsyncIterableIterator<T>(stream: ReadableStream<T>): AsyncIterableIterator<T>
```

`ReadableStream` should be an async iterable object,
but many runtimes don't support this yet.

### isNodeJSReadableStream
```ts
function isNodeJSReadableStream(val: any): val is NodeJS.ReadableStream
```

### isNodeJSWritableStream
```ts
function isNodeJSWritableStream(val: any): val is NodeJS.WritableStream
```
