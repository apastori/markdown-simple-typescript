import { Pattern } from "../Pattern";
import { numberHeaders } from "../../types/numberHeadersType";
import { toRegex } from "../toRegex";
import { isBaseHeaderRegex } from "./isBaseHeaderRegex";

export const generatePatternHeader = (number: numberHeaders) => {
    const baseRegExpStr = `^#{${number.toString()}}s?([^\\n]+)`;
    const regExp = toRegex(baseRegExpStr, "gm");
    if (!isBaseHeaderRegex(baseRegExpStr)) {
        throw new Error(`regex pattern: ${baseRegExpStr} does not fit header regex`);
    }
    return new Pattern(regExp, 
    `<h${number.toString()}>{}</h${number.toString()}>`
    );
}