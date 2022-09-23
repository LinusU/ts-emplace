# `Map#emplace` & `WeakMap#emplace` polyfill for TypeScript

This package includes the [core-js](https://github.com/zloirock/core-js) polyfill for `Map#emplace` and `WeakMap#emplace`, along with TypeScript typings.

The `emplace` function is defined in [this TC39 proposal](https://github.com/tc39/proposal-upsert).

## Installation

```sh
npm install --save ts-emplace
```

## Usage

```typescript
import 'ts-emplace'

const map = new Map<string, number>()

map.emplace('foo', {
  insert (key, map) {
    return 0
  },
  update (existing, key, map) {
    return existing + 1
  }
})
```

## API

The API specification is available in [the TC39 proposal](https://github.com/tc39/proposal-upsert).
