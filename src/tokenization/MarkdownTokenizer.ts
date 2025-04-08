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
      this.EolConfig = EOLConfig
      this.input = this.convertEOLtoLineFeed(input)
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
      const lines: string[] = this.separateByLineFeed()
      const tokens: MarkdownToken[] = []
      let numberTokens: number = 1
      lines.map((line: string, linePosition: number) => {
        let i: number = 0
        let lineToken: boolean = false
        while (i < this.getRules().length && !lineToken) {
          const ruleTokenization: RuleTokenizer = this.getRules()[i] as RuleTokenizer
          let j: number = 0
          while (j < ruleTokenization.getRegex().length && !lineToken) {
            const match: RegExpMatchArray | null = line.match(ruleTokenization.getRegex()[j] as RegExp)
            if (match) {
              let newToken: MarkdownToken
              if (ruleTokenization.getName() === 'heading') {
                  newToken = {
                    id: numberTokens,
                    type: ruleTokenization.getName(),
                    //1 index because is first capture group
                    content: match[1] as string,
                    //level for heading
                    level: ruleTokenization.getLevel(),
                    line: linePosition + 1
                  }
              } else {
                  newToken = {
                    line: numberTokens,
                    id: numberTokens,
                    type: ruleTokenization.getName(),
                    //1 index because is first capture group
                    content: match[1] as string
                  }
              }
              tokens.push(newToken)
              numberTokens++
              lineToken = true
              continue  
            }
            j++
          }
          if (lineToken) continue
          i++
        }
      })
      return tokens
    }

    private convertEOLtoLineFeed(input: string): string {
      if (this.getEOLConfigPattern() === "\n") return input
      if (this.getEOLConfigPattern() === "\r\n") return input.replace(/\r\n/g, '\n')
      if (this.getEOLConfigPattern() === "\r") return input.replace(/\r/g, '\n')
      throw new Error("EOL Config contains unconsidered pattern")
    }
    
    private separateByEOL(): string[] {
      return this.getInput().split(this.getEOLConfigPattern())
    }

    private separateByLineFeed(): string[] {
      return this.getInput().split('\n')
    }
}

export { MarkdownTokenizer }