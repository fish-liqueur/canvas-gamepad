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
export type RadialButtonRadius = [number, number];
export type ButtonSystemSettings = {
    radius: [number, number] | null;
    iconSize: number;
    iconCoordinates: [number, number];
    iconName: string;
    key: ButtonKey;
};
export type ButtonKey = 'rotate' | 'right' | 'down' | 'left' | 'play-pause';
