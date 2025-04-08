import { headers } from "./block/headers/headers"
import { RuleTokenizer } from "./RuleTokenizer"
import { hrRulesArray } from "./block/hr/horizontalRules"

const RulesTokenizer: RuleTokenizer[] = [
    ...headers,
    ...hrRulesArray
]

export { RulesTokenizer }