import { ButtonState } from './types';

export function applyStyle(state: ButtonState) {
    const styles = this.styles[state];
    if (styles?.lineWidth) this.context.lineWidth = styles.lineWidth;
    if (styles?.shadowBlur) this.context.shadowBlur = styles.shadowBlur;
    if (styles?.shadowColor) this.context.shadowColor = styles.shadowColor;
    if (styles?.strokeStyle) this.context.strokeStyle = styles.strokeStyle;
    this.context.stroke(this.path);
}