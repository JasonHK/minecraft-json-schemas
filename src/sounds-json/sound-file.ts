"use strict";

import type { SoundFileObject } from "./sound-file-object";
import type { SoundFilePath } from "./sound-file-path";

/**
 * Represents the sound file a sound event uses.
 */
export type SoundFile =
    | SoundFilePath
    | SoundFileObject;
