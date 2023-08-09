import { CanvasGamepadOptions } from "@features/gamepad";
import { ButtonDefinitionRadial, ButtonDefinitionCorner } from "@entities/button";

const strokeStyleDefault = '#ff577d';

export const defaultCanvasGamepadOptions: CanvasGamepadOptions = {
    buttons: [] as (ButtonDefinitionCorner | ButtonDefinitionRadial)[],
    style: {
        general: {
            shadowColor: 'transparent',
            shadowBlur: 0,
            strokeStyle: strokeStyleDefault,
            lineWidth: 2,
        },
        active: {
            shadowColor: 'red',
            shadowBlur: 20,
            strokeStyle: 'red',
            lineWidth: 2,
        },
    }
}

export const buttonsDefault: (ButtonDefinitionCorner | ButtonDefinitionRadial)[] = [
    {
        key: 'up',
        type: 'radial',
        radius: [-135, -45],
        icon: {
            key: 'cached',
            x: 40,
            y: 40,
            size: 25,
        }
    },
    {
        key: 'right',
        type: 'radial',
        radius: [-45, 45],
        icon: {
            key: 'arrow_forward',
            x: 40,
            y: 40,
            size: 25,
        }
    },
    {
        key: 'down',
        type: 'radial',
        radius: [45, 135],
        icon: {
            key: 'arrow_downward',
            x: 60,
            y: 60,
            size: 25,
        }
    },
    {
        key: 'left',
        type: 'radial',
        radius: [135, 225],
        icon: {
            key: 'arrow_back',
            x: 80,
            y: 80,
            size: 25,
        }
    },
    {
        key: 'pause',
        type: 'corner',
        position: 'top-right',
        icon: {
            key: 'play_pause',
            color: strokeStyleDefault,
            size: 25,
        }
    },
]