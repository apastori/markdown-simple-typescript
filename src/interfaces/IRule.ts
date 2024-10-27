import { rule } from "../ruleType";
import { IPattern } from "./IPattern";

export interface IRule {
    name: rule,
    patterns: IPattern[],
    convert(raw: string): string
};