import Gamepad from "@features/gamepad";
import { ButtonStyleKit } from "@entities/button";
export default class CanvasGamepad {
    rootElement: HTMLDivElement;
    gamepad: Gamepad;
    constructor(rootId: string, callback: () => void, userOptions?: Partial<ButtonStyleKit>);
}
export type { ButtonStyleKit };
