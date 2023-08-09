import { ButtonStyle, ButtonDefinition } from './types';
import initButton from './init';
import applyStyle from './apply-style';

export default class Button {
    options: ButtonDefinition;
    path: Path2D;
    style: ButtonStyle;
    context: CanvasRenderingContext2D;
    key: string;
    private canvasSide: number;

    constructor(
        options: ButtonDefinition,
        context: CanvasRenderingContext2D,
        style: ButtonStyle,
        canvasSide: number,
    ) {
        this.options = options;
        this.key = options.key;
        this.context = context;
        this.style = style;
        this.canvasSide = canvasSide;
        this.path = new Path2D();

        initButton(this.context, this.path, this.canvasSide, options, this.style);
        applyStyle(this.style, this.context, this.path);
    }

    // applyStyle() {

    // }
}