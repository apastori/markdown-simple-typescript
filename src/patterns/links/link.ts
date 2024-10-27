import { Pattern } from "../Pattern";
import { linkRegexPattern } from "./linkRegexPattern";
import { toRegex } from "../toRegex";
import { isLinkRegex } from "./isLinkRegex";
import { IPattern } from "../IPattern";

export const link: IPattern[] = ((): IPattern[] => {
    const linkPatterns: IPattern[] = [];
    for (const element of linkRegexPattern) {
        const linkRegex = toRegex(element);
        if (!isLinkRegex(element)) {
            throw new Error(`regex pattern: ${element} does not fit Link regex`);
        }
        linkPatterns.push(new Pattern(
            linkRegex,
            '<a href="$2" target="_blank" rel="noopener">$1</a>'
        ));
    }
    return linkPatterns;
})();

