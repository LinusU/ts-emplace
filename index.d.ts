interface Map<K, V> {
  emplace (key: K, op: { insert?: (key: K, map: Map<K, V>) => V, update?: (existing: V, key: K, map: Map<K, V>) => V }): V
}

interface WeakMap<K extends object, V> {
  emplace (key: K, op: { insert?: (key: K, map: WeakMap<K, V>) => V, update?: (existing: V, key: K, map: WeakMap<K, V>) => V }): V
}
