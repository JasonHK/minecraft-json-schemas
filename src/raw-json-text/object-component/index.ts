"use strict";

import type { PlainTextComponent } from "./plain-text-component";
import type { TranslatedTextComponent } from "./translated-text-component";
import type { ScoreboardValueComponent } from "./scoreboard-value-component";
import type { EntityNamesComponent } from "./entity-names-component";
import type { KeybindsComponent } from "./keybinds-component";
import type { NBTValuesComponent } from "./nbt-values-component";

export type ObjectComponent =
    | PlainTextComponent
    | TranslatedTextComponent
    | ScoreboardValueComponent
    | EntityNamesComponent
    | KeybindsComponent
    | NBTValuesComponent;
