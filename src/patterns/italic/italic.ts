import { Pattern } from "../Pattern";
import { italicRegexPattern } from "./italicRegexPattern";
import { toRegex } from "../toRegex";
import { isItalicRegex } from "./isItalicRegex";
import { IPattern } from "../IPattern";

export const italic: IPattern[] = ((): IPattern[] => {
    const italicPatterns: IPattern[] = [];
    for (const element of italicRegexPattern) {
        const italicRegex = toRegex(element, "g");
        if (!isItalicRegex(element)) {
            throw new Error(`regex pattern: ${element} does not fit italic regex`);
        }
        italicPatterns.push(new Pattern(
            italicRegex,
            '<i>{}</i>'
        ));
    }
    return italicPatterns;
})();
