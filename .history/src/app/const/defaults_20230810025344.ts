import { ButtonsKit } from "@features/gamepad";
import { ButtonStyleKit } from "@entities/button";

const strokeStyleDefault = '#ff577d';

export const styleDefault: ButtonStyleKit = {
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

// TODO: fix icon positioning and make icon option available
export const buttonsDefault: ButtonsKit = [
    {
        key: 'up',
        // icon: 'sync',
    },
    {
        key: 'right',
        // icon: 'arrow_forward',
    },
    {
        key: 'down',
        // icon: 'arrow_downward',
    },
    {
        key: 'left',
        // icon: 'arrow_back',
    },
    {
        key: 'play-pause',
        // icon: 'play_arrow',
    },
]