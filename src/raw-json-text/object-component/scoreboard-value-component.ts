"use strict";

import type { AnyObjectComponent } from "./any-object-component";
import type { ScoreboardScore } from "./scoreboard-score";

export interface ScoreboardValueComponent extends AnyObjectComponent
{
    score: ScoreboardScore;
}
