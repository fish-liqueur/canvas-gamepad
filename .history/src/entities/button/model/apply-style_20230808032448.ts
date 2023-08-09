import { ButtonStyle } from './types';

export function applyStyle(styles: ButtonStyle, context: CanvasRenderingContext2D, path: Path2D) {
    if (styles?.lineWidth) context.lineWidth = styles.lineWidth;
    if (styles?.shadowBlur) context.shadowBlur = styles.shadowBlur;
    if (styles?.shadowColor) context.shadowColor = styles.shadowColor;
    if (styles?.strokeStyle) context.strokeStyle = styles.strokeStyle;
    context.stroke(path);
}