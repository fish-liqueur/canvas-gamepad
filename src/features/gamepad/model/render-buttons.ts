import Button from "@entities/button";
import { CanvasGamepadOptions } from "./types";
import gamepadButtonsConfig from "../const/gamepad-config";

export default function renderButtons(
    options: CanvasGamepadOptions,
    context: CanvasRenderingContext2D,
    canvasSide: number,
    activeButton: Button | null = null
): Button[] {
    const { buttons, style } = options;
    const buttonsRendered: Button[] = [];

    buttons.forEach((button, i): void => {
        const styleSelected = button.key === activeButton?.key ? style.active : style.general;
        buttonsRendered.push(new Button(button, context, styleSelected, canvasSide, gamepadButtonsConfig[i]));
    })
    return buttonsRendered;
}