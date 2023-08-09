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

export const buttonsDefault: ButtonsKit = [
    {
        key: 'up',
        icon: 'sync',
    },
    {
        key: 'right',
        icon: 'arrow_forward',
    },
    {
        key: 'down',
        icon: 'arrow_downward',
    },
    {
        key: 'left',
        icon: 'arrow_back',
    },
    {
        key: 'play-pause',
        icon: 'play_arrow',
    },
    // {
    //     key: 'up',
    //     type: 'radial',
    //     radius: [-135, -45],
    //     icon: {
    //         key: 'cached',
    //         x: 50,
    //         y: 25,
    //         size: 50,
    //     }
    // },
    // {
    //     key: 'right',
    //     type: 'radial',
    //     radius: [-45, 45],
    //     icon: {
    //         key: 'arrow_forward',
    //         x: 75,
    //         y: 50,
    //         size: 50,
    //     }
    // },
    // {
    //     key: 'down',
    //     type: 'radial',
    //     radius: [45, 135],
    //     icon: {
    //         key: 'arrow_downward',
    //         x: 50,
    //         y: 75,
    //         size: 50,
    //     }
    // },
    // {
    //     key: 'left',
    //     type: 'radial',
    //     radius: [135, 225],
    //     icon: {
    //         key: 'arrow_back',
    //         x: 25,
    //         y: 50,
    //         size: 50,
    //     }
    // },
    // {
    //     key: 'pause',
    //     type: 'corner',
    //     position: 'top-right',
    //     icon: {
    //         key: 'play_pause',
    //         color: strokeStyleDefault,
    //         size: 25,
    //     }
    // },
]