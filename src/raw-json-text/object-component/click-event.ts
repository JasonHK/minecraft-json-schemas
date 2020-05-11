"use strict";

import type { ClickEventAction } from "./click-event-action";

export interface ClickEvent
{
    action: ClickEventAction;
    value: string;
}
