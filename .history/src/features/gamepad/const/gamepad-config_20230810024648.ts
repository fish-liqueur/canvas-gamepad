import { ButtonSystemSettings } from '@entities/button';

const gamepadButtonsConfig = [ 
    {
        radius: [-135, -45],
        iconSize: 15,
        iconCoordinates: [50, 25],
        iconName: 'sync',
    } as ButtonSystemSettings, 
    {
        radius: [-45, 45],
        iconSize: 15,
        iconCoordinates: [75, 50],
        iconName: 'arrow_forward',
    } as ButtonSystemSettings, 
    {
        radius: [45, 135],
        iconSize: 15,
        iconCoordinates: [50, 75],
        iconName:  
    } as ButtonSystemSettings, 
    {
        radius: [135, 225],
        iconSize: 15,
        iconCoordinates: [25, 50],
        iconName:  
    } as ButtonSystemSettings, 
    {
        radius: null,
        iconSize: 9,
        iconCoordinates: [89, 5],
        iconName:  
    } as ButtonSystemSettings, 
 ];
export default gamepadButtonsConfig;
