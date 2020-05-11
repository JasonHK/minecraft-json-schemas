"use strict";

import type { LatestVersions } from "./latest-versions";
import type { VersionEntry } from "./version-entry";

/**
 * Represents an object containing information of Minecraft releases.
 */
export interface VersionManifest
{
    /**
     * An object containing the version numbers of the latest stable and snapshot
     * release of Minecraft.
     */
    latest: LatestVersions;

    /**
     * A list of objects containing basic information of Minecraft releases.
     */
    versions: VersionEntry[];
}

export type {
    LatestVersions,
    VersionEntry,
};
