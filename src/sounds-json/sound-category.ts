"use strict";

/**
 * The category of a sound event. Used to determine which volume option in the
 * in-game options should be used.
 * 
 * **REMARKS:** `"voice"` was added since 1.9 (16w02a).
 */
export type SoundCategory =
    | "master"
    | "music"
    | "record"
    | "weather"
    | "block"
    | "hostile"
    | "neutral"
    | "player"
    | "ambient"
    | "voice";
