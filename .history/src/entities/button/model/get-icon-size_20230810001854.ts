export default function getIconSize(canvasSide: number, size: number): [number, number] {
    const percent = canvasSide / 100;
    const result = [(x - size / 2) * percent, (y - size / 2) * percent] as [number, number];
    console.log('getIconPosition ', result);
    
    return result;
}