import { Rule } from "../Rule";
import { link as linkPattern } from "../../patterns/patterns";

export const linkRules: Rule = new Rule(
    "link",
    [...linkPattern]
)