import { merge } from 'lodash';
import { ButtonStyleKit } from "@entities/button"
import { styleDefault } from "./../const/defaults";

export default function getOptions(userOptions: Partial<ButtonStyleKit> | undefined): ButtonStyleKit {
    const options: ButtonStyleKit = styleDefault;

    merge(options, userOptions || {});

    return <ButtonStyleKit>options;
}