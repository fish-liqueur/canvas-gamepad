import { merge } from 'lodash';
import { CanvasGamepadOptions } from "@features/gamepad";
import { buttonsDefault, defaultCanvasGamepadOptions } from "./../const/defaults";

export default function getOptions(userOptions: Partial<CanvasGamepadOptions> | undefined): CanvasGamepadOptions {
    const options: Partial<CanvasGamepadOptions> = {};
    const default1: CanvasGamepadOptions = defaultCanvasGamepadOptions;
    merge(defaultCanvasGamepadOptions, userOptions);
    merge(options, [defaultCanvasGamepadOptions, userOptions || {}]);
    console.log('getOptions ', defaultCanvasGamepadOptions, userOptions || {}, options);
    console.log('getOptions 1 ', default1);
    // console.log('getOptions 2 ', merge(options, [defaultCanvasGamepadOptions, userOptions || {}]));
    


    if (!options.buttons?.length) {
        options.buttons = buttonsDefault;
    }

    return <CanvasGamepadOptions>options;
}