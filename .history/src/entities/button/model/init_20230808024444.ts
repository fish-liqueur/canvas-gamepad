export function initButton(options: ButtonDefinitionCorner | ButtonDefinitionRadial): void {

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