"use strict";

import { RawJsonText } from "../../";

import { AnyHoverEvent } from "./any-hover-event";

export interface ShowTextAction extends AnyHoverEvent
{
    action: "show_text";
    value?: RawJsonText;
    contents?: RawJsonText;
}
