import { imageRegexPattern } from "./imageRegexPattern";
import { imageRegexPatternType } from "./imageRegexPatternType";

export function isImageRegex(value: string): value is imageRegexPatternType {
    // Check if the input string matches the allowed string regex patterns headers
    return imageRegexPattern.includes(value as imageRegexPatternType);
}
