import { ButtonDefinition, ButtonStyleKit } from "@entities/button";
import { type } from "os";

export type ButtonsKit = [ButtonDefinition, ButtonDefinition, ButtonDefinition, ButtonDefinition, ButtonDefinition];

export type CanvasGamepadOptions = {
    buttons: ButtonsKit;
    style: ButtonStyleKit;
}

export type GamepadButtonsConfig = [ RadialButtonRadius, RadialButtonRadius, RadialButtonRadius, RadialButtonRadius, null ]