# Sudoo-Immutable

[![Build Status](https://travis-ci.com/SudoDotDog/Sudoo-Immutable.svg?branch=master)](https://travis-ci.com/SudoDotDog/Sudoo-Immutable)
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
