import { Rule } from "./Rule"

export interface IMarkdownParser {
    rules: Rule[],
    addRuleBefore(rule: Rule, before: string): IMarkdownParser
    addRule(rule: Rule): IMarkdownParser
    render(raw: string): string
}