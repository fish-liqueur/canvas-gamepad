import {ButtonDefinitionRadial, ButtonDefinitionCorner, ButtonStyleKit} from "./types.ts";

export interface CanvasGamepadOptions {
    buttons: (ButtonDefinitionCorner | ButtonDefinitionRadial)[];
    style: ButtonStyleKit;
}

