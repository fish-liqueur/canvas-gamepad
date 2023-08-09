export default function(canvasSide: number, x: number, y: number, size: number): [number, number] {
    const percent = canvasSide / 100;
    return [(x - size / 2) * percent, (y - size / 2) * percent];
}