"use strict";

import type { TextComponent } from "../text-component";

import type { AnyObjectComponent } from "./any-object-component";

export interface PlainTextComponent extends AnyObjectComponent
{
    text: TextComponent;
}
