type ButtonStyle = {
    shadowColor?: string,
    shadowBlur?: number,
    lineWidth?: number,
    strokeStyle?: string,
}

type ButtonType = 'radial' | 'corner';

type ButtoniconParameters = {
    key: string;
    size: number;
    x?: number;
    y?: number;
    color?: string;
}


type ButtonDefinitionGeneral = {
    key: string;
    type: ButtonType;
    icon?: ButtoniconParameters;
}

export type ButtonDefinitionRadial = ButtonDefinitionGeneral & {
    radius: [number, number];
}

export type ButtonDefinitionCorner = ButtonDefinitionGeneral & {
    position: SideButtonPositions;
}

export type ButtonStyleKit = {
    general: ButtonStyle,
    active: ButtonStyle,
}

export type ButtonState = 'general' | 'active';


export type SideButtonPositions = 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';