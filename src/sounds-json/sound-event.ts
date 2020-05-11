"use strict";

import type { SoundCategory } from "./sound-category";
import type { SoundFile } from "./sound-file";

/**
 * Represents a sound event.
 */
export interface SoundEvent
{
    /**
     * Whether the sounds listed in `sounds` should replace the sounds listed in the
     * default "sounds.json" for this sound event.
     * 
     * **REMARKS:** This field was used only in resource packs.
     * 
     * @default false
     */
    replace?: boolean;

    /**
     * The category of this sound event. Used to determine which volume option in
     * the in-game options should be used.
     * 
     * **REMARKS:** `"voice"` was added since 16w02a (snapshot for 1.9).
     * 
     * **REMARKS:** This field was removed since 1.10.
     * 
     * @default "master"
     */
    category?: SoundCategory;

    /**
     * The identifier of a text, which will be translated as the subtitle of this
     * sound event if "Show Subtitles" was enabled in-game.
     */
    subtitle?: string;

    /**
     * The sound files this sound event uses. One of the listed sounds is randomly
     * selected to play when this sound event is triggered.
     */
    sounds?: SoundFile[];
}
