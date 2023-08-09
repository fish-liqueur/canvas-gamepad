import { merge } from 'lodash';
import { CanvasGamepadOptions } from "@features/gamepad";
import { buttonsDefault, styleDefault } from "./../const/defaults";

export default function getOptions(userOptions: Partial<CanvasGamepadOptions> | undefined): CanvasGamepadOptions {
    const options: CanvasGamepadOptions = {
        buttons: buttonsDefault,
        style: styleDefault,
    };

    merge(options, userOptions || {});

    return <CanvasGamepadOptions>options;
}