import type { baseHeaderRegexPattern } from "./baseHeaderRegexPatternType";

export const headersPatternList: baseHeaderRegexPattern[] = [
    "/^#{1}s?([^\n]+)/gm",
    "/^#{2}s?([^\n]+)/gm",
    "/^#{3}s?([^\n]+)/gm", 
    "/^#{4}s?([^\n]+)/gm",
    "/^#{5}s?([^\n]+)/gm",
    "/^#{6}s?([^\n]+)/gm"
]