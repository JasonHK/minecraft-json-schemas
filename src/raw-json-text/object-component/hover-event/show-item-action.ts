"use strict";

import { AnyHoverEvent } from "./any-hover-event";
import { ShowItemContents } from "./show-item-contents";

export interface ShowItemAction extends AnyHoverEvent
{
    action: "show_item";
    value?: string;
    contents?: ShowItemContents;
}
