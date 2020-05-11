"use strict";

import type { RawJsonText } from "../";

import type { ClickEvent } from "./click-event";
import type { HoverEvent } from "./hover-event";
import type { TextColor } from "./text-color";

export interface AnyObjectComponent extends
    ContentPlainText, ContentTranslatedText, ContentScoreboardValue, ContentEntityNames,
    ContentKeybinds, ContentNBTValues, Children, Formatting, Interactivity {}

interface Children
{
    /**
     * A list of child raw JSON text components that will be rendered after this one.
     */
    extra?: RawJsonText[];
}

interface ContentEntityNames
{
    selector?: unknown;
}

interface ContentKeybinds
{
    keybind?: unknown;
}

interface ContentNBTValues
{
    nbt?: unknown;
    interpret?: boolean;
    block?: unknown;
    entity?: unknown;
    storage?: unknown;
}

interface ContentPlainText
{
    text?: unknown;
}

interface ContentScoreboardValue
{
    score?: unknown;
}

interface ContentTranslatedText
{
    translate?: unknown;
    with?: unknown;
}

interface Formatting
{
    /**
     * The color that was used to render the content.
     */
    color?: TextColor;

    /**
     * @default "minecraft:default"
     */
    font?: string;

    /**
     * Whether to render the content in bold.
     */
    bold?: boolean;

    /**
     * Whether to render the content in italics.
     */
    italic?: boolean;

    /**
     * Whether to underline the content.
     */
    underlined?: boolean;

    /**
     * Whether to strikethrough the content.
     */
    strikethrough?: boolean;

    /**
     * Whether to render the content with style of obfuscated.
     */
    obfuscated?: boolean;
}

interface Interactivity
{
    /**
     * The text that will be inserted into the player's chat input when the text is shift-clicked.
     */
    insertion?: string;

    clickEvent?: ClickEvent;

    hoverEvent?: HoverEvent;
}
