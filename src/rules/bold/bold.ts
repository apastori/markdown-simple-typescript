import { Rule } from "../Rule";
import { bold as boldPatterns } from "../../patterns/patterns";

export const boldRules: Rule = new Rule(
    "bold",
    [...boldPatterns]
)