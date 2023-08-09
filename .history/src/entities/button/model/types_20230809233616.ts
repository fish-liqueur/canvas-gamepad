// type ButtonType = 'radial' | 'corner';

// type ButtoniconParameters = {
//     key: string;
//     size: number;
//     x: number;
//     y: number;
//     color: string;
// }


export type ButtonDefinition = {
    key: string;
    icon: string;
}

// export type ButtonDefinitionRadial = ButtonDefinitionGeneral & {
//     radius: [number, number];
// }

// export type ButtonDefinitionCorner = ButtonDefinitionGeneral & {
//     position: SideButtonPositions;
// }

export type ButtonStyle = {
    shadowColor: string,
    shadowBlur: number,
    lineWidth: number,
    strokeStyle: string,
}

export type ButtonStyleKit = {
    general: ButtonStyle,
    active: ButtonStyle,
}

export type ButtonState = 'general' | 'active';


export type SideButtonPositions = 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';

export type RadialButtonRadius = [number, number];

export type ButtonSystemSettings = {
    radius: [number, number] | null,
    iconSize: number,
    iconCoordinates: [number, number],
}