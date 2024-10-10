import { Pattern } from "../Pattern";
import { boldRegexPattern } from "./boldRegexPattern";
import { toRegex } from "./toRegex";
import { isBoldRegex } from "./isBoldRegex";
import { IPattern } from "../IPattern";

export const bold: IPattern[] = ((): IPattern[] => {
    const boldPatterns: IPattern[] = [];
    for (const element of boldRegexPattern) {
        const boldRegex = toRegex(element);
        if (!isBoldRegex(element)) {
            throw new Error(`regex pattern: ${element} does not fit bold regex`);
        }
        boldPatterns.push(new Pattern(
            boldRegex,
            '<b>{}</b>'
        ));
    }
    return boldPatterns;
})();


