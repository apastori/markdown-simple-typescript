import { RegexFlags } from "./regexFlagType";
import { EmptyString } from "./emptyStringType";

export interface RegexFlagDict {
    regexPattern: string,
    regexFlag: RegexFlags | EmptyString
}