"use strict";

import type { integer } from "../_common/integer";

import type { SoundFilePath } from "./sound-file-path";
import type { SoundEntryType } from "./sound-file-type";

/**
 * Represents the sound file a sound event uses, along with additional settings
 * for the file.
 */
export interface SoundFileObject
{
    /**
     * The path to a sound file from the "_namespace_/sounds" folder (excluding the
     * ".ogg" file extension) or the name of another sound event.
     * 
     * The namespace defaults to `minecraft` but it can be changed by prepending a
     * namespace and a `:` before the path.
     * 
     * **REMARKS:** The path delimiter uses forward slashes instead of backslashes.
     */
    name: SoundFilePath;

    /**
     * The way how the `name` of this sound should interpret.
     * 
     * If the value was `"sound"`, the value of `name` will be interpreted as the
     * name of a file. If the value was `"event"`, the value of `name` will be
     * interpreted as the name of an already defined sound event.
     * 
     * @default "sound"
     */
    type?: SoundEntryType;

    /**
     * Whether this sound should be loaded when loading the pack instead of when the
     * sound is played.
     * 
     * **REMARKS:** This field was added since 1.13 (18w10a).
     * 
     * @default false
     */
    preload?: boolean;

    /**
     * The chance that this sound will be selected to play when this sound
     * event is triggered.
     * 
     * @default 1
     */
    weight?: integer;

    /**
     * The volume this sound will be played at.
     * 
     * @minimum 0.0
     * @maximum 1.0
     * @default 1.0
     */
    volume?: number;

    /**
     * The pitch height this sound will be played at.
     * 
     * @default 1.0
     */
    pitch?: number;

    /**
     * The volume reduction rate of this sound (based on distance).
     */
    attenuation_distance?: integer;

    /**
     * Whether this sound should be streamed from its file.
     * 
     * **REMARKS:** It is recommended that this is set to `true` for sounds that
     * have a duration longer than a few seconds to avoid lag.
     * 
     * **NOTE**: This was enabled for all sounds in the `"music"` and `"record"`
     * categories (except for Note Block sounds), since most the sounds that belong
     * to those categories are over a minute long.
     * 
     * @default false
     */
    stream?: boolean;
}
