export type ButtonStyle = {
    shadowColor?: string,
    shadowBlur?: number,
    lineWidth?: number,
    strokeStyle?: string,
}

export type ButtonStyleKit = {
    general: ButtonStyle,
    active: ButtonStyle,
}

export type ButtonState = 'general' | 'active';

export type ButtonType = 'radial' | 'corner';

export type SideButtonPositions = 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';

export type ButtoniconParameters = {
    key: string;
    size: number;
    x?: number;
    y?: number;
    color?: string;
}


export type ButtonDefinitionGeneral = {
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