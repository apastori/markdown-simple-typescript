import { IPattern } from "../IPattern";
import { generatePatternHeader } from "./generatePatternHeader";
import { numberHeaders } from "../../types/numberHeadersType";

const headers: IPattern[]  = []

let i: numberHeaders = 1;

while (i <= 6) {
    const newPatternHeader = generatePatternHeader(i as numberHeaders);
    headers.push(newPatternHeader);
    i++;
}

export { headers }