"use strict";

import { AnyHoverEvent } from "./any-hover-event";
import { ShowEntityContents } from "./show-entity-contents";

export interface ShowEntityAction extends AnyHoverEvent
{
    action: "show_entity";
    value?: string;
    contents?: ShowEntityContents;
}
