import { RuleTokenizer } from "../../RuleTokenizer"
import { toRegex } from "../../toRegex"
import { hrPatternList } from "./hrPatternList"
import { HrPattern } from "./hrPatternType"

const hrRegex: RegExp[] = []

for (let i: number = 0; i < hrPatternList.length; i++) {
    const hrPatter: HrPattern = hrPatternList[i]!
    const regExp: RegExp = toRegex(hrPatter)
    hrRegex.push(regExp)
}

const hrRule: RuleTokenizer = new RuleTokenizer({
    name: 'hr',
    orderId: 2,
    regex: hrRegex
})

const hrRulesArray: RuleTokenizer[] = [hrRule]

export { hrRulesArray }