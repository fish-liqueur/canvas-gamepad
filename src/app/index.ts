import Gamepad from "@features/gamepad";
import { CanvasGamepadOptions } from "@features/gamepad"
import getOptions from "./lib/get-options";
import addMaterialFonts from "./ model/add-material-fonts";

export default class CanvasGamepad {
    rootElement: HTMLDivElement;
    gamepad: Gamepad;

    constructor(rootId: string, callback: () => void, userOptions?: Partial<CanvasGamepadOptions>) {
        this.rootElement = document.getElementById(rootId)! as HTMLDivElement;

        if (!this.rootElement) {
            throw new Error(`Cannot find a container with id "${rootId}"!`);
        }

        console.log('app ', callback);
        // addMaterialFonts().then(() => {
        //     const options = getOptions(userOptions);
        //     this.gamepad = new Gamepad(this.rootElement, callback, options);
        // });
        addMaterialFonts();

        const options = getOptions(userOptions);
            this.gamepad = new Gamepad(this.rootElement, callback, options);
    }
}

export type { CanvasGamepadOptions }; 