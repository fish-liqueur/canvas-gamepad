import { ButtonStyle, ButtonDefinitionCorner, ButtonDefinitionRadial } from './types';
import initButton from './init';
import applyStyle from './apply-style';

export default class Button {
    options: ButtonDefinitionCorner | ButtonDefinitionRadial;
    path: Path2D;
    style: ButtonStyle;
    context: CanvasRenderingContext2D;
    key: string;
    private canvasSide: number;

    constructor(
        options: ButtonDefinitionCorner | ButtonDefinitionRadial,
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

        initButton(this.context, this.path, this.canvasSide, options);
        applyStyle(this.style, this.context, this.path);
    }

    // applyStyle() {

    // }
}