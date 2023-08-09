import { ButtonDefinitionCorner, ButtonDefinitionRadial } from './types';
import degreesToRadians from '@shared/lib/degrees-to-radians';
import getIconPosition from './get-icon-position';

export default function initButton(
    context: CanvasRenderingContext2D,
    path: Path2D,
    canvasSide: number,
    options: ButtonDefinitionCorner | ButtonDefinitionRadial
): void {

    if ('radius' in options) {
        const { radius } = options;
        path.moveTo(canvasSide / 2, canvasSide / 2);
        path.arc(canvasSide / 2, canvasSide / 2, 4 * canvasSide / 10, degreesToRadians(radius[0]), degreesToRadians(radius[1]));
        path.lineTo(canvasSide / 2, canvasSide / 2);
    } else if ('position' in options) {

        path.arc(9 * canvasSide / 10 - canvasSide / 80, canvasSide / 10 + canvasSide / 80, canvasSide / 10, degreesToRadians(0), degreesToRadians(360));
    }

    if (options.icon) {
        if (options.icon.color) context.fillStyle = options.icon.color;
        context.font = `${options.icon.size}px material-icons`;
        if (options.icon.key && options.icon.x && options.icon.y) {
            const iconCoordinates = getIconPosition(canvasSide, options.icon.x, options.icon.y, options.icon.size);
            context.fillText(
                options.icon.key,
                options.icon.x,
                options.icon.y,
            );
        }
    }
}