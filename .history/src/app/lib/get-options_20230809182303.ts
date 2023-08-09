import { merge } from 'lodash';
import { CanvasGamepadOptions } from "@features/gamepad";
import { buttonsDefault, defaultCanvasGamepadOptions } from "./../const/defaults";

export default function getOptions(userOptions: Partial<CanvasGamepadOptions> | undefined): CanvasGamepadOptions {
    const options: CanvasGamepadOptions = defaultCanvasGamepadOptions;
    merge(options, userOptions || {});

    if (!options.buttons?.length) {
        options.buttons = buttonsDefault;
    }

    return <CanvasGamepadOptions>options;
}