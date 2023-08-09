import { ButtonSystemSettings } from '@entities/button';

const gamepadButtonsConfig = [ 
    {
        radius: [-135, -45],
        iconSize: 50
    } as ButtonSystemSettings, 
    [-45, 45] as ButtonSystemSettings, 
    [45, 135] as ButtonSystemSettings, 
    [135, 225] as ButtonSystemSettings, 
    null
 ];
export default gamepadButtonsConfig;
