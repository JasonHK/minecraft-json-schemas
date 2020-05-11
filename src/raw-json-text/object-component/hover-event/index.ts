"use strict";

import type { ShowEntityAction } from "./show-entity-action";
import type { ShowItemAction } from "./show-item-action";
import type { ShowTextAction } from "./show-text-action";

export type HoverEvent = ShowTextAction | ShowItemAction | ShowEntityAction;
