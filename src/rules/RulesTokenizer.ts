import { headers } from "./block/headers/headers"
import { RuleTokenizer } from "./RuleTokenizer"

const RulesTokenizer: RuleTokenizer[] = [
    ...headers
]

export { RulesTokenizer }