# extra-stream
Utilities for Stream.

## Install
```sh
npm install --save extra-stream
# or
yarn add extra-stream
```

### API
#### isNodeJSReadableStream
```ts
function isNodeJSReadableStream(val: any): val is NodeJS.ReadableStream
```

#### isNodeJSWritableStream
```ts
function isNodeJSWritableStream(val: any): val is NodeJS.WritableStream
```
