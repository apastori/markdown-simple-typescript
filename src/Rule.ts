import { IRule } from "./IRule";
import { rule } from "./ruleType";
import { IPattern } from "./IPattern";

export class Rule implements IRule {
  name: rule;
  patterns: IPattern[];
  constructor(name: rule, patterns: IPattern[]) {
    this.name = name;
    this.patterns = patterns;
  };

  convert(raw: string): string {
    return this.patterns.reduce(
      (result, pattern) => pattern.convert(result),
      raw
    );
  };
};