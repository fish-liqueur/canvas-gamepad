import {ButtonStyleKit, ButtonOptions, ButtonState, ButtonDefinitionCorner, ButtonDefinitionRadial} from "./types.ts";
import {degreesToRadians} from "./utils.ts";
// import { ButtonData } from "./interfaces.ts";

export class Button {
    path: Path2D;
    styles: ButtonStyleKit;
    context: CanvasRenderingContext2D;
    key: string;
    private canvasSide: number;

    constructor(options: ButtonDefinitionCorner | ButtonDefinitionRadial, context: CanvasRenderingContext2D, styles: ButtonStyleKit, canvasSide: number) {
        // this.options = options;
        this.key = options.key;
        this.context = context;
        this.styles = styles;
        this.canvasSide = canvasSide;
        this.path = new Path2D();

        this.initButton(options);
    }

    applyStyle(state: ButtonState) {
        const styles = this.styles[state];
        if (styles?.lineWidth) this.context.lineWidth = styles.lineWidth;
        if (styles?.shadowBlur) this.context.shadowBlur = styles.shadowBlur;
        if (styles?.shadowColor) this.context.shadowColor = styles.shadowColor;
        if (styles?.strokeStyle) this.context.strokeStyle = styles.strokeStyle;
        this.context.stroke(this.path);
    }


    private initButton(options: ButtonDefinitionCorner | ButtonDefinitionRadial): void {

        if ('radius' in options) {
            const { radius } = options;
            this.path.moveTo(this.canvasSide / 2, this.canvasSide / 2);
            this.path.arc(this.canvasSide / 2, this.canvasSide / 2, 4 * this.canvasSide / 10, degreesToRadians(radius[0]), degreesToRadians(radius[1]));
            this.path.lineTo(this.canvasSide / 2, this.canvasSide / 2);
        } else if ('position' in options) {

            this.path.arc(9 * this.canvasSide / 10 - this.canvasSide / 80, this.canvasSide / 10 + this.canvasSide / 80, this.canvasSide / 10, degreesToRadians(0), degreesToRadians(360));
        }

        if (options.icon) {
            this.context.fillStyle = options.icon.color;
            this.context.font = `${options.icon.size}px material-icons`;
            this.context.fillText(options.icon.key, options.icon.x, options.icon.y);
        }

        this.applyStyle('general');
    }

    private createPath()
}