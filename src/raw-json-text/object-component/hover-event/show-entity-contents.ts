"use strict";

import { RawJsonText } from "../../";

export interface ShowEntityContents
{
    id: string;
    type: string;
    name?: RawJsonText;
}
