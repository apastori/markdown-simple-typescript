import { Pattern } from "../Pattern";
import { imageRegexPattern } from "./imageRegexPattern";
import { toRegex } from "../toRegex";
import { isImageRegex } from "./isImageRegex";
import { IPattern } from "../IPattern";

export const image: IPattern[] = ((): IPattern[] => {
    const imagePatterns: IPattern[] = [];
    for (const element of imageRegexPattern) {
        const imageRegex = toRegex(element, "g");
        if (!isImageRegex(element)) {
            throw new Error(`regex pattern: ${element} does not fit image regex`);
        }
        imagePatterns.push(new Pattern(
            imageRegex,
            '<img src="{$2}" alt="{$1}" />'
        ));
    }
    return imagePatterns;
})();

