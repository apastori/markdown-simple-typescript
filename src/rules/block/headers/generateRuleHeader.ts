import { RuleTokenizer } from "../../RuleTokenizer"
import { toRegex } from "../../toRegex"
import { isBaseHeaderRegex } from "./isBaseHeaderRegex"
import { baseHeaderRegexPattern } from "./baseHeaderRegexPatternType"

export const generateRuleHeader = (headerPattern: baseHeaderRegexPattern, level: number) => {
    const regExp: RegExp = toRegex(headerPattern)
    if (!isBaseHeaderRegex(headerPattern)) {
        throw new Error(`regex pattern: ${headerPattern} does not fit header regex`)
    }
    return new RuleTokenizer({ name: 'heading', orderId: 1, regex: [regExp], level: level })
}