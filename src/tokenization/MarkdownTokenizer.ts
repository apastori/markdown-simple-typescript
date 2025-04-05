import { RuleTokenizer } from "../rules/RuleTokenizer"
import { EOLCharacter } from "../types/EOLCharacterType"
import { EOLConfig } from "../types/EOLConfigType"
import { MarkdownToken } from "./IMarkdownToken"
import { RulesTokenizer } from "../rules/RulesTokenizer"

// Tokenizer Class
class MarkdownTokenizer {
    private readonly input: string
    private readonly EolConfig: EOLConfig
    private readonly tokens: MarkdownToken[]
    private readonly rules: RuleTokenizer[]
    
    constructor({ input, EOLConfig }: {
      input: string,
      EOLConfig: EOLConfig
    }) {
      this.input = input
      this.EolConfig = EOLConfig
      this.rules = this.getOrderedRules(RulesTokenizer)
      this.tokens = this.generateTokens()
    }

    private getInput(): string {
      return this.input
    }

    private getEOLConfigPattern(): EOLCharacter {
      return this.EolConfig.pattern
    }

    private getRules(): RuleTokenizer[] {
      return this.rules
    }

    private getOrderedRules(rules: RuleTokenizer[]): RuleTokenizer[] {
      return [...rules].sort((a: RuleTokenizer, b: RuleTokenizer): number => {
        if (a.getOrderId() !== b.getOrderId()) {
            return a.getOrderId() - b.getOrderId()
        }
        const aLevel = 'level' in a ? a.getLevel() : -Infinity;
        const bLevel = 'level' in b ? b.getLevel() : -Infinity;
        return aLevel - bLevel
      })
    }

    public getTokens(): MarkdownToken[] {
      return this.tokens
    }

    private generateTokens(): MarkdownToken[] {
      const lines: string[] = this.separateByEOL()
      const tokens: MarkdownToken[] = [] 
      lines.map((line: string, linePosition: number) => {
        let i = 0
        let lineNotToken: boolean = false
        while (i <= this.getRules().length && !lineNotToken) {
          const ruleTokenization: RuleTokenizer = this.getRules()[i] as RuleTokenizer
          const match: RegExpMatchArray | null = line.match(ruleTokenization.getRegex())
          if (match) {
            let newToken: MarkdownToken
            if (ruleTokenization.getName() === 'heading') {
                newToken = {
                  line: linePosition + 1,
                  type: ruleTokenization.getName(),
                  //1 index because is first capture group
                  content: match[1] as string,
                  //level for heading
                  level: ruleTokenization.getLevel()
                }
            } else {
                newToken = {
                  line: linePosition + 1,
                  type: ruleTokenization.getName(),
                  //1 index because is first capture group
                  content: match[1] as string
                }
            }
            tokens.push(newToken)
            lineNotToken = true
            continue
          }
          i++
        }
      })
      return tokens
    }
    
    private separateByEOL(): string[] {
      return this.getInput().split(this.getEOLConfigPattern())
    }
}

export { MarkdownTokenizer }