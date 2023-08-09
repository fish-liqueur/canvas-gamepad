import { ButtonDefinition, ButtonSystemSettings, ButtonStyle } from './types';
import degreesToRadians from '@shared/lib/degrees-to-radians';
import getIconPosition from './get-icon-position';

export default function initButton(
    context: CanvasRenderingContext2D,
    path: Path2D,
    canvasSide: number,
    options: ButtonDefinition,
    styles: ButtonStyle,
    buttonSystemSettings: ButtonSystemSettings,
): void {

    const { radius, iconSize, iconCoordinates } = buttonSystemSettings;

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

    // const boundingBox = path.getBounds();
    const bounds = calculatePathBounds(path);
    console.log('path ', path, bounds);

    if (options.icon) {
        context.fillStyle = styles.strokeStyle;

        context.font = `${options.iconSize}px material-icons`;
        if (options.icon.key && options.icon.x && options.icon.y) {
            const [x, y] = getIconPosition(canvasSide, options.icon.x, options.icon.y, options.icon.size || 20);
            context.fillText(
                options.icon.key,
                x,
                y,
                // options.icon.x,
                // options.icon.y,
            );
        }
    }
}

function calculatePathBounds(path: Path2D): { minX: number; minY: number; maxX: number; maxY: number } {
    const bounds = {
      minX: Infinity,
      minY: Infinity,
      maxX: -Infinity,
      maxY: -Infinity,
    };

      // Iterate through the path's commands and points
      const pathCommands = path.toString().split(' ');
      for (let i = 0; i < pathCommands.length; i += 3) {
        // const command = pathCommands[i];
        const x = parseFloat(pathCommands[i + 1]);
        const y = parseFloat(pathCommands[i + 2]);

        if (!isNaN(x) && !isNaN(y)) {
          bounds.minX = Math.min(bounds.minX, x);
          bounds.minY = Math.min(bounds.minY, y);
          bounds.maxX = Math.max(bounds.maxX, x);
          bounds.maxY = Math.max(bounds.maxY, y);
        }
      }

      console.log('calculatePathBounds ', path, pathCommands, bounds);
      
    return bounds;
  }