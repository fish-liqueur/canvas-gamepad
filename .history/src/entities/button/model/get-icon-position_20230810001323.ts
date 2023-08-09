export default function getIconPosition(canvasSide: number, x: number, y: number, size: number): [number, number] {
    const percent = canvasSide / 100;
    const result = [(x - size / 2) * percent, (y - size / 2) * percent];
    console.log('getIconPosition ', result);
    
    return result;
}