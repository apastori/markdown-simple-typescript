import { rule } from "./ruleType";
import { IPattern } from "../patterns/IPattern";

export interface IRule {
    name: rule,
    patterns: IPattern[],
    convert(raw: string): string
};