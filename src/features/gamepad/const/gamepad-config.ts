import { ButtonSystemSettings } from '@entities/button';

const gamepadButtonsConfig: {
    up: ButtonSystemSettings,
    right: ButtonSystemSettings,
    down: ButtonSystemSettings,
    left: ButtonSystemSettings,
    'play-pause': ButtonSystemSettings,
} = {
    up: {
        radius: [-135, -45],
        iconSize: 15,
        iconCoordinates: [50, 25],
        iconName: 'sync',
        key: 'up',
    }, 
    right: {
        radius: [-45, 45],
        iconSize: 15,
        iconCoordinates: [75, 50],
        iconName: 'arrow_forward',
        key: 'right',
    }, 
    down: {
        radius: [45, 135],
        iconSize: 15,
        iconCoordinates: [50, 75],
        iconName: 'arrow_downward',
        key: 'down',
    }, 
    left: {
        radius: [135, 225],
        iconSize: 15,
        iconCoordinates: [25, 50],
        iconName: 'arrow_back',
        key: 'left',
    }, 
    'play-pause': {
        radius: null,
        iconSize: 9,
        iconCoordinates: [89, 5],
        iconName: 'play_arrow',
        key: 'play-pause',
    }, 
}; 

export default gamepadButtonsConfig;
