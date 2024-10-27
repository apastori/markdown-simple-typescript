import { Pattern } from "../classes/Pattern";
import { numberHeaders } from "./numberHeadersType";
import { toRegex } from "./toRegex";
import { isBaseHeaderRegex } from "./isBaseHeaderRegex";

export const generatePatternHeader = (number: numberHeaders) => {
    const baseRegExpStr = `/^#{${number.toString()}}\s?([^\n]+)/gm`;
    const regExp = toRegex(baseRegExpStr);
    if (!isBaseHeaderRegex(baseRegExpStr)) {
        throw new Error(`regex pattern: ${baseRegExpStr} does not fit header regex`);
    }
    return new Pattern(regExp, 
    `<h${number.toString()}>{}</h${number.toString()}>`
    );
}