# `Map#upsert` & `WeakMap#upsert` polyfill for TypeScript

This package includes the [core-js](https://github.com/zloirock/core-js) polyfill for `Map#upsert` and `WeakMap#upsert`, along with TypeScript typings.

The `upsert` function is defined in [this TC39 proposal](https://github.com/tc39/proposal-upsert).

## Installation

```sh
npm install --save ts-upsert
```

## Usage

```typescript
import 'ts-upsert'

const map = new Map<string, number>()

map.upsert('foo', () => 1)
map.upsert('bar', undefined, () => 2)
map.upsert('baz', () => 3, undefined)
map.upsert('qux', () => 4, () => 5)
```

## API

The API specification is available in [the TC39 proposal](https://github.com/tc39/proposal-upsert).
