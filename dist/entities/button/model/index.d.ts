import { ButtonStyle, ButtonDefinition, ButtonSystemSettings } from './types';
export default class Button {
    options: ButtonDefinition;
    path: Path2D;
    style: ButtonStyle;
    context: CanvasRenderingContext2D;
    key: string;
    buttonSystemSettings: ButtonSystemSettings;
    private canvasSide;
    constructor(options: ButtonDefinition, context: CanvasRenderingContext2D, style: ButtonStyle, canvasSide: number, buttonSystemSettings: ButtonSystemSettings);
}
