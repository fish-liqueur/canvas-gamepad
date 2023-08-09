import { merge } from 'lodash';
import { CanvasGamepadOptions } from "@features/gamepad";
import { buttonsDefault, defaultCanvasGamepadOptions } from "./../const/defaults";

export default function getOptions(userOptions: Partial<CanvasGamepadOptions> | undefined): CanvasGamepadOptions {
    const options: Partial<CanvasGamepadOptions> = {};
    merge(options, [defaultCanvasGamepadOptions, userOptions || {}]);


    if (!options.buttons?.length) {
        options.buttons = buttonsDefault;
    }

    return <CanvasGamepadOptions>options;
}