import { headerRules, boldRules, italicRules, imageRules, linkRules } from "./rules/rules"
import { Rule } from "./rules/RuleTokenizer"

const rules: Rule[] = []

//Check Header Rules
if (headerRules instanceof Rule) {
    rules.push(headerRules);
}

if (Array.isArray(headerRules)) {
    rules.push(...headerRules);
}

//Check Bold Rules
if (boldRules instanceof Rule) {
    rules.push(boldRules);
}

if (Array.isArray(boldRules)) {
    rules.push(boldRules);
}

//Check Italic Rules
if (italicRules instanceof Rule) {
    rules.push(italicRules);
}

if (Array.isArray(italicRules)) {
    rules.push(...italicRules);
}

//Check Images Rules
if (imageRules instanceof Rule) {
    rules.push(imageRules);
}

if (Array.isArray(imageRules)) {
    rules.push(...imageRules);
}

//Check Link Rules
if (linkRules instanceof Rule) {
    rules.push(linkRules);
}

if (Array.isArray(linkRules)) {
    rules.push(...linkRules);
}

export { rules };
