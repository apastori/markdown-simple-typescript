import { RuleTokenizer } from "../../RuleTokenizer"
import { toRegex } from "../../toRegex"
import { unorderedListPattern } from "./unorderedListPatternType"
import { unorderedListPatternList } from "./unorderedListPatternList"

const unorderedListRegex: RegExp[] = []

for (let i: number = 0; i < unorderedListPatternList.length; i++) {
    const unorderedListPattern: unorderedListPattern = unorderedListPatternList[i]!
    const regExp: RegExp = toRegex(unorderedListPattern)
    unorderedListRegex.push(regExp)
}

const unorderedListRule: RuleTokenizer = new RuleTokenizer({
    name: 'unordered-list',
    orderId: 3,
    regex: unorderedListRegex
})

const unorderedListRulesArray: RuleTokenizer[] = [unorderedListRule]

export { unorderedListRulesArray }