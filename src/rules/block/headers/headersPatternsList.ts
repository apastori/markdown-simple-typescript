import type { baseHeaderRegexPattern } from "./baseHeaderRegexPatternType"

export const headersPatternList: baseHeaderRegexPattern[] = [
    "^#{1}\\s+([^\\n]+)",
    "^#{2}\\s+([^\\n]+)",
    "^#{3}\\s+([^\\n]+)", 
    "^#{4}\\s+([^\\n]+)",
    "^#{5}\\s+([^\\n]+)",
    "^#{6}\\s+([^\\n]+)"
] as const