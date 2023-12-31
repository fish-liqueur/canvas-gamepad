import { ButtonDefinition, ButtonSystemSettings, ButtonStyle } from './types';
import degreesToRadians from '@shared/lib/degrees-to-radians';
import getIconPosition from './get-icon-position';
import getIconSize from './get-icon-size';

export default function initButton(
    context: CanvasRenderingContext2D,
    path: Path2D,
    canvasSide: number,
    _options: ButtonDefinition,
    styles: ButtonStyle,
    buttonSystemSettings: ButtonSystemSettings,
): void {

    const { radius, iconSize, iconCoordinates, iconName } = buttonSystemSettings;

    context.fillStyle = 'transparent';

    if (radius) {
        path.moveTo(canvasSide / 2, canvasSide / 2);
        path.arc(canvasSide / 2, canvasSide / 2, 4 * canvasSide / 10, degreesToRadians(radius[0]), degreesToRadians(radius[1]));
        path.lineTo(canvasSide / 2, canvasSide / 2);
     
    } else {

        path.arc(9 * canvasSide / 10 - canvasSide / 80, canvasSide / 10 + canvasSide / 80, canvasSide / 10, degreesToRadians(0), degreesToRadians(360));
    }


    context.lineWidth = styles.lineWidth;
    context.shadowBlur = styles.shadowBlur;
    context.shadowColor = styles.shadowColor;
    context.strokeStyle = styles.strokeStyle;
    context.stroke(path);

    // if (options.icon) {
        const iconSizeAbsolute = getIconSize(canvasSide, iconSize);
        context.fillStyle = styles.strokeStyle;

        context.font = `200 ${iconSizeAbsolute}px material-icons`;

            const [x, y] = getIconPosition(canvasSide, iconCoordinates[0], iconCoordinates[1], iconSizeAbsolute);
            context.fillText(
                iconName,
                x,
                y,
            );

    // }
}
