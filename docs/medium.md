# Immutable Medium

`produce`, `asyncProduce`, and `clone` function are just easier to call method, supported by `Medium` class.

## Instantiate

```ts
import { Medium } from "@sudoo/immutable";

const medium = Medium.from(object);
```

## Clone

```ts
const newObject = medium.clone();
```

## Mutate

```ts
const newObject = medium.mutate((draft) => {
    draft.hello = "world";
});
```

## Async Mutate

```ts
const newObject = await medium.asyncMutate(async (draft) => {
    draft.hello = await getWorld();
});
```
