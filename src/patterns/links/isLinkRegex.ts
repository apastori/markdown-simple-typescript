import { linkRegexPattern } from "./linkRegexPattern";
import { linkRegexPatternType } from "./linkRegexPatternType";

export function isLinkRegex(value: string): value is linkRegexPatternType {
    // Check if the input string matches the allowed string regex patterns headers
    return linkRegexPattern.includes(value as linkRegexPatternType);
}
