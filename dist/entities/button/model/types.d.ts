export type ButtonDefinition = {
    key: string;
};
export type ButtonStyle = {
    shadowColor: string;
    shadowBlur: number;
    lineWidth: number;
    strokeStyle: string;
};
export type ButtonStyleKit = {
    general: ButtonStyle;
    active: ButtonStyle;
};
export type ButtonState = 'general' | 'active';
export type SideButtonPositions = 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';
export type RadialButtonRadius = [number, number];
export type ButtonSystemSettings = {
    radius: [number, number] | null;
    iconSize: number;
    iconCoordinates: [number, number];
    iconName: string;
    key: ButtonKey;
};
export type ButtonKey = 'up' | 'right' | 'down' | 'left' | 'play-pause';
