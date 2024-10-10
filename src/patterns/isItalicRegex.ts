import { italicRegexPattern } from "./italicRegexPattern";
import { italicRegexPatternType } from "./italicRegexPatternType";

export function isItalicRegex(value: string): value is italicRegexPatternType {
    // Check if the input string matches the allowed string regex patterns headers
    return italicRegexPattern.includes(value as italicRegexPatternType);
}
