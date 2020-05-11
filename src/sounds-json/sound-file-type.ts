"use strict";

/**
 * The way how the `name` of a sound should interpret.
 * 
 * If the value was `"sound"`, the value of `name` will be interpreted as the
 * name of a file. If the value was `"event"`, the value of `name` will be
 * interpreted as the name of an already defined sound event.
 */
export type SoundEntryType =
    | "sound"
    | "event";
