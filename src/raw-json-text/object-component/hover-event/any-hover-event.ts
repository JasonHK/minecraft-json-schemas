"use strict";

import { RawJsonText } from "../../";

import type { HoverEventAction } from "../hover-event-action";

import type { ShowItemContents } from "./show-item-contents";
import type { ShowEntityContents } from "./show-entity-contents";

export interface AnyHoverEvent
{
    action: HoverEventAction;
    value?: RawJsonText | string;
    contents?: RawJsonText | ShowItemContents | ShowEntityContents;
}
