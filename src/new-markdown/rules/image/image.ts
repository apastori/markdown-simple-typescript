import { Rule } from "../Rule";
import { image as imagePattern } from "../../patterns/patterns";

const imageRules: Rule = new Rule(
    "image",
    [...imagePattern]
)

export { imageRules }