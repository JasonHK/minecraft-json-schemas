"use strict";

import { SoundFilePath } from "./sound-file-path";
import { SoundFileObject } from "./sound-file-object";

/**
 * Represents the sound file a sound event uses.
 */
export type SoundFile =
    | SoundFilePath
    | SoundFileObject;
