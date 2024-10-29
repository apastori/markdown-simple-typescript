import { IRule } from "./IRule";
import { rule } from "./ruleType";
import { IPattern } from "../patterns/IPattern";

export class Rule implements IRule {
  name: rule;
  patterns: IPattern[];
  constructor(name: rule, patterns: IPattern[]) {
    this.name = name;
    this.patterns = patterns;
  };

  apply(raw: string): string {
    return this.patterns.reduce(
      (result, pattern) => pattern.apply(result),
      raw
    );
  };
};