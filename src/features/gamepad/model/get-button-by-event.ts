import Button from "@entities/button";

export default function getButtonByEvent(
    event: MouseEvent | TouchEvent,
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    buttons: Button[],
): Button | null {
    const x = event instanceof MouseEvent ? event.offsetX : event.touches[0]?.clientX - canvas.getBoundingClientRect().left || event.changedTouches[0]?.clientX - canvas.getBoundingClientRect().left;
    const y = event instanceof MouseEvent ? event.offsetY : event.touches[0]?.clientY - canvas.getBoundingClientRect().top || event.changedTouches[0]?.clientY - canvas.getBoundingClientRect().left;

    return buttons.reduce((result: null | Button, button: Button): Button | null => {
        if (button.path && context.isPointInPath(button.path, x, y)) {
            result = button;
        }
        return result;
    }, null)
}