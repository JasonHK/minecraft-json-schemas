"use strict";

import type { SoundEvent } from "./sound-event";

/**
 * Represents a "sounds.json" file. This file was used by the sound system in
 * resource packs which tells the sound system what sound files to play when a
 * sound event is triggered by one or more in-game events.
 */
export interface SoundsJson
{
    /**
     * A sound event. The name is usually separated in categories (such as `entity.enderman.stare`).
     */
    [soundEvent: string]: SoundEvent;
}

export type { SoundCategory } from "./sound-category";
export type { SoundEvent } from "./sound-event";
export type { SoundFile } from "./sound-file";
export type { SoundFileObject } from "./sound-file-object";
export type { SoundFilePath } from "./sound-file-path";
export type { SoundEntryType } from "./sound-file-type";
