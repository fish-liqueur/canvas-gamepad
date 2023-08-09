import { ButtonDefinition, ButtonStyleKit } from "@entities/button";

export type ButtonsKit = [ButtonDefinition, ButtonDefinition, ButtonDefinition, ButtonDefinition, ButtonDefinition];

export type CanvasGamepadOptions = {
    buttons: ButtonsKit;
    style: ButtonStyleKit;
}