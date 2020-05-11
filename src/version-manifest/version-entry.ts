"use strict";

import type { DateTime } from "../_common/date-time";
import type { Url } from "../_common/url";
import type { VersionID } from "../_common/version-id";
import type { VersionType } from "../_common/version-type";

/**
 * Represents an object containing basic information of a Minecraft release.
 */
export interface VersionEntry
{
    /**
     * The version number of this Minecraft release.
     */
    id: VersionID;

    /**
     * The release type of this Minecraft version.
     */
    type: VersionType;

    /**
     * The location of the information JSON file of this version.
     */
    url: Url;

    /**
     * The time when the information JSON file of this version last updated.
     */
    time: DateTime;

    /**
     * The release time of this Minecraft version.
     */
    releaseTime: DateTime;
}
