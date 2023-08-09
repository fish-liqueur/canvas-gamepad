import { merge } from 'lodash';
import { CanvasGamepadOptions } from "@features/gamepad";
import { buttonsDefault, defaultCanvasGamepadOptions } from "./../const/defaults";

export default function getOptions(userOptions: Partial<CanvasGamepadOptions> | undefined): CanvasGamepadOptions {
    // const options: Partial<CanvasGamepadOptions> = {};
    const options: CanvasGamepadOptions = defaultCanvasGamepadOptions;
    // merge(defaultCanvasGamepadOptions, userOptions);
    merge(options, userOptions || {});
    console.log('getOptions ', defaultCanvasGamepadOptions, options);
    // console.log('getOptions 2 ', merge(options, [defaultCanvasGamepadOptions, userOptions || {}]));
    


    if (!options.buttons?.length) {
        options.buttons = buttonsDefault;
    }

    return <CanvasGamepadOptions>options;
}