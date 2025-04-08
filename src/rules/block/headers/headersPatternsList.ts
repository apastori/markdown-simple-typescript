import type { baseHeaderRegexPattern } from "./baseHeaderRegexPatternType"

export const headersPatternList: baseHeaderRegexPattern[] = [
    "^ {0,3}#{1}\\s+([^\\n]+)",
    "^ {0,3}#{2}\\s+([^\\n]+)",
    "^ {0,3}#{3}\\s+([^\\n]+)", 
    "^ {0,3}#{4}\\s+([^\\n]+)",
    "^ {0,3}#{5}\\s+([^\\n]+)",
    "^ {0,3}#{6}\\s+([^\\n]+)"
] as const