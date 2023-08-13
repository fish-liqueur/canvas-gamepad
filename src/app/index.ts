import Gamepad from "@features/gamepad";
import { ButtonStyleKit } from "@entities/button"
import getOptions from "./lib/get-options";

export class CanvasGamepad {
    rootElement: HTMLDivElement;
    gamepad: Gamepad;

    constructor(rootId: string, callback: (key: string) => void, userOptions?: Partial<ButtonStyleKit>) {
        this.rootElement = document.getElementById(rootId)! as HTMLDivElement;

        if (!this.rootElement) {
            throw new Error(`Cannot find a container with id "${rootId}"! Please, specify an existing id`);
        }
        
        const options = getOptions(userOptions);
        this.gamepad = new Gamepad(this.rootElement, callback, options);
    }
}

export type { ButtonStyleKit }; 