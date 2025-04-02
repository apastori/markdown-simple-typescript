import { boldRegexPattern } from "./boldRegexPattern";
import { boldRegexPatternType } from "./boldRegexPatternType";

export function isBoldRegex(value: string): value is boldRegexPatternType {
    // Check if the input string matches the allowed string regex patterns headers
    return boldRegexPattern.includes(value as boldRegexPatternType);
}
