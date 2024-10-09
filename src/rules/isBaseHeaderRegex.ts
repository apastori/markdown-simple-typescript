import type { baseHeaderRegexPattern } from "./baseHeaderRegexPatternType";
import { headersPatternList } from "./headersPatternsList";

export function isBaseHeaderRegex(value: string): value is baseHeaderRegexPattern {
    // Check if the input string matches the allowed string regex patterns headers
    return headersPatternList.includes(value as baseHeaderRegexPattern);
}
