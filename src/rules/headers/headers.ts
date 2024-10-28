import { Rule } from "../Rule"
import { headers } from "../../patterns/patterns"
import { headersTable } from "./headersTable"
import { numberHeadersStr } from "../../types/numberHeadersStrType"
import { rule } from "../ruleType"
import { IPattern } from "../../patterns/IPattern"

const headerRules: Rule[] = []

for (let i = 0; i < headers.length; i++) {
    const headerNumber: numberHeadersStr = String(i + 1) as numberHeadersStr
    const headerName: rule = `header-${headersTable[headerNumber]}` as rule
    const headerPattern: IPattern = headers[i]!
    const newRule: Rule = new Rule(headerName,
        [headerPattern]
    )
    headerRules.push(newRule)
}

export { headerRules } 