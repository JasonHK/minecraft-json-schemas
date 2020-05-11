"use strict";

import type { ArrayComponent } from "./array-component";
import type { NullComponent } from "./null-component";
import type { ObjectComponent } from "./object-component";
import type { TextComponent } from "./text-component";

export type RawJsonText = 
    | TextComponent
    | ObjectComponent
    | ArrayComponent
    | NullComponent;
