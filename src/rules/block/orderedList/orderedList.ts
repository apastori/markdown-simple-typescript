import { RuleTokenizer } from "../../RuleTokenizer"
import { toRegex } from "../../toRegex"
import { orderedListPattern } from "./orderedListPatternType"
import { orderedListPatternList } from "./orderedListPatternList"

const orderedListRegex: RegExp[] = []

for (let i: number = 0; i < orderedListPatternList.length; i++) {
    const orderedListPattern: orderedListPattern = orderedListPatternList[i]!
    const regExp: RegExp = toRegex(orderedListPattern)
    orderedListRegex.push(regExp)
}

const orderedListRule: RuleTokenizer = new RuleTokenizer({
    name: 'ordered-list',
    orderId: 3,
    regex: orderedListRegex
})

const orderedListRulesArray: RuleTokenizer[] = [orderedListRule]

export { orderedListRulesArray }