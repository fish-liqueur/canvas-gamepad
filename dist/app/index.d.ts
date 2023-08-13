import Gamepad from "@features/gamepad";
import { ButtonStyleKit } from "@entities/button";
export declare class CanvasGamepad {
    rootElement: HTMLDivElement;
    gamepad: Gamepad;
    constructor(rootId: string, callback: (key: string) => void, userOptions?: Partial<ButtonStyleKit>);
}
export type { ButtonStyleKit };
