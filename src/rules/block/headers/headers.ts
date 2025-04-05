import { numberHeaders } from "../../../types/numberHeadersType"
import { RuleTokenizer } from "../../RuleTokenizer"
import { baseHeaderRegexPattern } from "./baseHeaderRegexPatternType"
import { generateRuleHeader } from "./generatePatternHeader"
import { headersPatternList } from './headersPatternsList'

const headers: RuleTokenizer[]  = []

let i: numberHeaders = 1

while (i < headersPatternList.length) {
    const headerPattern: baseHeaderRegexPattern = headersPatternList[i - 1]!
    headers.push(generateRuleHeader(headerPattern, i))
    i++
}

export { headers }