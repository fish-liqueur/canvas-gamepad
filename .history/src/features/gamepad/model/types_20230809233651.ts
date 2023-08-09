import { ButtonDefinition, ButtonStyleKit, ButtonSystemSettings } from "@entities/button";
import { type } from "os";

export type ButtonsKit = [ButtonDefinition, ButtonDefinition, ButtonDefinition, ButtonDefinition, ButtonDefinition];

export type CanvasGamepadOptions = {
    buttons: ButtonsKit;
    style: ButtonStyleKit;
}

export type GamepadButtonsConfig = [ ButtonSystemSettings, ButtonSystemSettings, ButtonSystemSettings, ButtonSystemSettings, ButtonSystemSettings ]