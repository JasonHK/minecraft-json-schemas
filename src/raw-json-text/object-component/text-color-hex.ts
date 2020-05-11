"use strict";

import type { LiteralSymbol } from "../../_common/literal-symbol";

/**
 * The color of a text in the hexadecimal color format.
 * 
 * @asType string
 * @minLength 7
 * @maxLength 7
 * @pattern ^#[0-9A-Fa-f]{6}$
 */
export type TextColorHex = string & LiteralSymbol<"TextColorHex">;
