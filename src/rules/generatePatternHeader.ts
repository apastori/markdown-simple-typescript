import { Pattern } from "../Pattern";
import { numberHeaders } from "./numberHeadersType";
import { toRegex } from "./toRegex";

export const generatePatternHeader = (number: numberHeaders) => {
    const baseRegExpStr = `/^#{${number.toString()}}\s?([^\n]+)/gm`
    const regExp = toRegex(baseRegExpStr)
    return new Pattern(regExp, 
    `<h${number.toString()}>{}</h${number.toString()}>`
    )
}