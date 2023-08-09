import { ButtonStyle, ButtonDefinition, RadialButtonRadius } from './types';
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
        radius: RadialButtonRadius | null,
    ) {
        this.options = options;
        this.key = options.key;
        this.context = context;
        this.style = style;
        this.canvasSide = canvasSide;
        this.path = new Path2D();
        this.radius = radius;

        initButton(
            this.context, 
            this.path, 
            this.canvasSide, 
            options, 
            this.style,
            this.radius,
        );
        // applyStyle(this.style, this.context, this.path);
    }

    // applyStyle() {

    // }
}