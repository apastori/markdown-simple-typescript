import { IPattern } from "./IPattern"

export class Pattern implements IPattern {
    regex: RegExp;
    replacement: string;
    constructor(regex: RegExp, replacement: string) {
      this.regex = regex;
      this.replacement = replacement;
    }
  
    convert(raw: string): string {
      return raw.replace(this.regex, this.replacement);
    }
}