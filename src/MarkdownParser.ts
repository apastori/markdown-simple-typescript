import { IMarkdownParser } from "./IMarkdownParser";
import { rules } from "./generateRulesArray";
import { Rule } from "./rules/Rule";

export class MarkdownParser implements IMarkdownParser {
    rules = rules;
    addRuleBefore(rule: Rule, before: string): IMarkdownParser {
        const index = this.rules.findIndex((r) => r.name === before);
        if (index !== -1) {
            this.rules.splice(index, 0, rule);
        }
        return this;
    }
    addRule(rule: Rule): IMarkdownParser {
        this.addRuleBefore(rule, 'paragraph');
        return this;
    }
    render(raw: string): string {
        let result = raw;
        this.rules.forEach((rule) => {
            result = rule.apply(result);
        });
        return result;
    }
}