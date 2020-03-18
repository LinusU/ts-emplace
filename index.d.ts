interface Map<K, V> {
  upsert (key: K, update: ((value: V) => V) | undefined, insert: () => V): V
  upsert (key: K, update: (value: V) => V, insert?: undefined): V | undefined
}

interface WeakMap<K extends object, V> {
  upsert (key: K, update: ((value: V) => V) | undefined, insert: () => V): V
  upsert (key: K, update: (value: V) => V, insert?: undefined): V | undefined
}
