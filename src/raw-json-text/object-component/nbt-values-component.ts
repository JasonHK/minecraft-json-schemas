"use strict";

import type { AnyObjectComponent } from "./any-object-component";

export interface NBTValuesComponent extends AnyObjectComponent
{
    nbt: string;

    /**
     * @default false
     */
    interpret?: boolean;

    block?: string;

    entity?: string;

    storage?: string;
}
