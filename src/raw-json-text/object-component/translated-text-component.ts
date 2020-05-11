"use strict";

import type { RawJsonText } from "../";

import type { AnyObjectComponent } from "./any-object-component";

export interface TranslatedTextComponent extends AnyObjectComponent
{
    translate: string;
    with?: RawJsonText[];
}
