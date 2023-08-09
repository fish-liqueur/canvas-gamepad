export default function getIconSize(canvasSide: number, size: number): number {
    const result = size * canvasSide / 100;
    
    return result;
}