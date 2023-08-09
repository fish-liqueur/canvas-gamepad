import { merge } from 'lodash.merge';
import { View } from "./view";
import {ButtonDefinition} from "./types.ts";
import {CanvasGamepadOptions} from "./interfaces.ts";
import {buttonsDefault, defaultCanvasGamepadOptions} from "./defaults.ts";

export default class CanvasGamepad {
    width = 10;
    height = 20;
    view: View;
    buttons: ButtonDefinition[];
    // buttonsDefault: ButtonDefinition[] = [
    //     {
    //         key: 'up',
    //         radius: [-135, -45],
    //         iconMD: 'cached',
    //     },
    //     {
    //         key: 'right',
    //         radius: [-45, 45],
    //         iconMD: 'arrow_forward',
    //     },
    //     {
    //         key: 'down',
    //         radius: [45, 135],
    //         iconMD: 'arrow_downward',
    //     },
    //     {
    //         key: 'left',
    //         radius: [135, 225],
    //         iconMD: 'arrow_back',
    //     },
    //     {
    //         key: 'pause',
    //         isPause: true,
    //         iconMD: 'play_pause',
    //     },
    // ]

    constructor(rootId: string, callback: Function, userOptions?: Partial<CanvasGamepadOptions>) {
        const options = this.getOptions(userOptions);
        this.view = new View(rootId, callback, options);
    }

    private getOptions(userOptions: Partial<CanvasGamepadOptions> | undefined): CanvasGamepadOptions {
        let options: Partial<CanvasGamepadOptions> = {};
        merge(options, [defaultCanvasGamepadOptions, userOptions || {}]);

        if (!options.buttons?.length) {
            options.buttons = buttonsDefault;
        }

        return <CanvasGamepadOptions>options;
    }
}

export 