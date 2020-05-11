"use strict";

import type { VersionID } from "../_common/version-id";

/**
 * Represents an object containing the version numbers of the latest stable and
 * snapshot release of Minecraft.
 */
export interface LatestVersions
{
    /**
     * The version number of the latest stable release of Minecraft.
     */
    release: VersionID;

    /**
     * The version number of the latest snapshot release of Minecraft.
     */
    snapshot: VersionID;
}
