export default function getIconPosition(canvasSide: number, x: number, y: number, size: number): [number, number] {
    const percent = canvasSide / 100;
    // const heightCorrector = 8 * percent;
    const heightCorrector = 15 * percent;
    const result = [x * percent - size / 2, y * percent - size / 2 + heightCorrector ] as [number, number];
    console.log('getIconPosition ', canvasSide, result);
    
    return result;
}