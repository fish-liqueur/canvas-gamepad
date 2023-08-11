import Button from "@entities/button";
import { ButtonStyleKit } from "@entities/button";
export default class Gamepad {
    canvasSide: number;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    buttons: Button[];
    buttonActive: Button | null;
    callback: (key: string) => void;
    private options;
    constructor(rootElement: HTMLDivElement, callback: () => void, options: ButtonStyleKit);
    private clearView;
    private handleActive;
    private handleInactive;
}
