import { CanvasGamepadOptions } from "@features/gamepad"

export default getOptions(userOptions: Partial<CanvasGamepadOptions> | undefined): CanvasGamepadOptions {
    const options: Partial<CanvasGamepadOptions> = {};
    merge(options, [defaultCanvasGamepadOptions, userOptions || {}]);

    if (!options.buttons?.length) {
        options.buttons = buttonsDefault;
    }

    return <CanvasGamepadOptions>options;
}