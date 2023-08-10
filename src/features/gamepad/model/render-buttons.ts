import Button from "@entities/button";
import { CanvasGamepadOptions } from "./types";
import gamepadButtonsConfig from "../const/gamepad-config";
import { ButtonKey } from '@entities/button';

export default function renderButtons(
    options: CanvasGamepadOptions,
    context: CanvasRenderingContext2D,
    canvasSide: number,
    activeButton: Button | null = null
): Button[] {
    const { buttons, style } = options;
    const buttonsRendered: Button[] = [];
    console.log('renderButtons ', buttons);
    
    Object.values(buttons)
    .sort((buttonA, buttonB) => {
        if (buttonA.key === activeButton?.key) {
          return 1;
        } else if (buttonB.key === activeButton?.key) {
          return -1;
        }
      
        return 0;
      }).forEach((button): void => {
        const styleSelected = button.key === activeButton?.key ? style.active : style.general;
        buttonsRendered.push(new Button(button, context, styleSelected, canvasSide, gamepadButtonsConfig[button.key as ButtonKey]));
    })
    return buttonsRendered;
}