import { EOLCharacter } from "../types/EOLCharacterType"
import { EOLConfig } from "../types/EOLConfigType"
import { MarkdownToken } from "./IMarkdownToken"

// Tokenizer Class
class MarkdownTokenizer {
    private readonly input: string
    private readonly EolConfig: EOLConfig
    private readonly tokens: MarkdownToken[]
    private readonly 
    
    constructor({ input, EOLConfig }: {
      input: string,
      EOLConfig: EOLConfig
    }) {
      this.input = input
      this.EolConfig = EOLConfig
      this.tokens = this.generateTokens()
    }

    private getInput(): string {
      return this.input
    }

    private getEOLConfigPattern(): EOLCharacter {
      return this.EolConfig.pattern
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
        while (i < )
      })
      return this.getInput().split(this.getEOLConfigPattern())
    }
    
    private separateByEOL(): string[] {
      return this.getInput().split(this.getEOLConfigPattern())
    }
}

export { MarkdownTokenizer }