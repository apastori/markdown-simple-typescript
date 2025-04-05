import { EOLCharacter } from "./types/EOLCharacterType"
import { EOLConfig } from "./types/EOLConfigType"

// Tokenizer Class
class MarkdownTokenizer {
    private readonly input: string
    private readonly EolConfig: EOLConfig
    private readonly tokens: string[]
    
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

    public getTokens(): string[] {
      return this.tokens
    }

    private splitInputEOL(): string[] {
      return this.getInput().split(this.getEOLConfigPattern())
    }
    
    private tokenization() {
      
    }

}

export { MarkdownTokenizer }