# Sudoo-Immutable

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-Immutable/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-Immutable/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Immutable/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Immutable)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fimmutable.svg)](https://www.npmjs.com/package/@sudoo/immutable)
[![downloads](https://img.shields.io/npm/dm/@sudoo/immutable.svg)](https://www.npmjs.com/package/@sudoo/immutable)

:closed_lock_with_key: Immutable for Typescript

## Install

```sh
yarn add @sudoo/immutable
# Or
npm install @sudoo/immutable --save
```

## Clone Object

Clone function is supported by `@sudoo/duplicated` package.

```ts
import { clone } from "@sudoo/immutable";

const newObject = clone(object);
```

## Produce Object

Within produce function, you can edit object immutably within mutable method.

```ts
import { produce } from "@sudoo/immutable";

const newObject = produce(oldObject, (draft) => {
    object.hello = "world";
});
oldObject // Not Edited
newObject // Edited
```

## Async Produce Object

Within produce function, you can edit object immutably within mutable method.

```ts
import { produce } from "@sudoo/immutable";

const newObject = await asyncProduce(oldObject, async (draft) => {
    object.hello = await getWorld();
});
oldObject // Not Edited
newObject // Edited
```

## Advanced

For more advanced way to use this package, see [Immutable Medium](./medium.md) document.
