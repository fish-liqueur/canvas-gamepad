import Gamepad from "@features/gamepad";
import { CanvasGamepadOptions } from "@features/gamepad"

export default class CanvasGamepad {
    gamepad: Gamepad;

    constructor(rootId: string, callback: () => void, userOptions?: Partial<CanvasGamepadOptions>) {
        const options = this.getOptions(userOptions);
        this.gamepad = new Gamepad(rootId, callback, options);
    }
}

exort interface 