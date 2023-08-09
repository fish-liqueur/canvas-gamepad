import Gamepad from "./../features";
// import Gamepad from "@features/gamepad";
import { CanvasGamepadOptions } from "features/gamepad"
import getOptions from "./lib/get-options";

export default class CanvasGamepad {
    gamepad: Gamepad;

    constructor(rootId: string, callback: () => void, userOptions?: Partial<CanvasGamepadOptions>) {
        const options = getOptions(userOptions);
        this.gamepad = new Gamepad(rootId, callback, options);
    }
}

export type { CanvasGamepadOptions }; 