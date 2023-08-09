export default function getIconPosition(canvasSide: number, x: number, y: number, size: number): [number, number] {
    const percent = canvasSide / 100;
    const result = [(x * percent - size / 2), (y * percent - size / 2) ] as [number, number];
    console.log('getIconPosition ', canvasSide, result);
    
    return result;
}