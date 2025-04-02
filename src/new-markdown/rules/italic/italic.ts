import { Rule } from "../Rule";
import { italic as italicPatterns } from "../../patterns/patterns";

export const italicRules: Rule = new Rule(
    "italic",
    [...italicPatterns]
)