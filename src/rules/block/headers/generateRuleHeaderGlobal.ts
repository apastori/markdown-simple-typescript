import { RuleTokenizer } from "../../RuleTokenizer"
import { numberHeaders } from "../../../types/numberHeadersType"
import { numberHeadersStr } from "../../../types/numberHeadersStrType"
import { toRegex } from "../../toRegex"
import { isBaseHeaderRegex } from "./isBaseHeaderRegex"
import { baseHeaderRegexPattern } from "./baseHeaderRegexPatternType"

export const generateRuleHeaderGlobal = (number: numberHeaders) => {
    const baseRegExpStr: baseHeaderRegexPattern = `^ {0,3}#{${number.toString() as numberHeadersStr}}\\s+([^\\n]+)`
    const regExp: RegExp = toRegex(baseRegExpStr, "gm")
    if (!isBaseHeaderRegex(baseRegExpStr)) {
        throw new Error(`regex pattern: ${baseRegExpStr} does not fit header regex`)
    }
    return new RuleTokenizer({ name: 'heading', orderId: 1, regex: [regExp], level: number })
}