"use strict";

import { LiteralSymbol } from "./literal-symbol";

/**
 * @asType integer
 */
export type integer = number & LiteralSymbol<"integer">;
