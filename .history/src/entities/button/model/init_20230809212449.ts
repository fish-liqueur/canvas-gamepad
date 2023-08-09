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

    // const boundingBox = path.getBounds();
    const bounds = calculatePathBounds(path);
    console.log('path ', path, bounds);

    if (options.icon) {
        if (options.icon.color) context.fillStyle = options.icon.color;

        context.font = `${options.icon.size}px material-icons`;
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

function calculatePathBounds(path: Path2D): any {
    const bounds = {
      minX: Infinity,
      minY: Infinity,
      maxX: -Infinity,
      maxY: -Infinity,
    };

    const pathIterator = new Path2D(path).getPathData();

    for (const seg of pathIterator) {
      for (let i = 0; i < seg.values.length; i += 2) {
        const x = seg.values[i];
        const y = seg.values[i + 1];

        bounds.minX = Math.min(bounds.minX, x);
        bounds.minY = Math.min(bounds.minY, y);
        bounds.maxX = Math.max(bounds.maxX, x);
        bounds.maxY = Math.max(bounds.maxY, y);
      }
    }

    return bounds;
  }