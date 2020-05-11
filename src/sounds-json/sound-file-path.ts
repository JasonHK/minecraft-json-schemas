"use strict";

/**
 * The path to a sound file from the "_namespace_/sounds" folder (excluding the
 * ".ogg" file extension).
 * 
 * The namespace defaults to `minecraft` but it can be changed by prepending a
 * namespace and a `:` before the path.
 * 
 * **REMARKS:** The path delimiter uses forward slashes instead of backslashes.
 */
export type SoundFilePath = string;
