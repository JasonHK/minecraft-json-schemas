"use strict";

export type LiteralSymbol<T extends string> = { [TKey in T]?: never; };
